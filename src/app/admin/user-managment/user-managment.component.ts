import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Users } from 'src/app/model/user';
import { UsermanagmentService } from 'src/app/service/usermanagment.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
})
export class UserManagmentComponent implements OnInit {
  alert: boolean = false;
    @ViewChild('updateForm') form!: NgForm;
    @ViewChild('updateDialog') updateDialog!: TemplateRef<any>;
    searchText = '';
    users: Users[] = [];
    currentUserId: any;
    data: any;
    p: number = 1;


    associateData = {
      associateId: '',
      firstName: '',
      techStack: '',
      lastName: '',
      systemRole: '',
      projectRole: '',
    };

    userForm = new FormGroup({
      associateId: new FormControl('', Validators.required),
      techStack: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      projectRole: new FormControl('', Validators.required),
      systemRole: new FormControl('', Validators.required),
    });

    get vassst() {
      return this.userForm.get('techStack');
    }
    get vassid() {
      return this.userForm.get('associateId');
    }
    get vfname() {
      return this.userForm.get('firstName');
    }
    get vlname() {
      return this.userForm.get('lastName');
    }
    get vprojectrole() {
      return this.userForm.get('projectRole');
    }
    get vsystemrole() {
      return this.userForm.get('systemRole');
    }

    constructor(
        private service: UsermanagmentService,
        private router: ActivatedRoute,
        private route: Router,
        public nav: SidebarService,
        public navbar: NavbarService,
        private readonly dialog: MatDialog
    ) {
      // this.getlist();
    }
    closeAlert() {
      this.alert = false;
    }

    formModal: any;
    ngOnInit(): void {
      this.nav.show();
      this.nav.doSomethingElseUseful();
      this.navbar.show();
      this.navbar.doSomethingElseUseful();
      this.service.getallUsers().subscribe((data) => {
        this.users = data;
      });
    }
    collection() {
      // To update the user
      this.service.updateUser(this.associateData).subscribe((result) => {

        this.route.navigate(['UserManagment']);
        this.service.getallUsers().subscribe((data) => {
          this.users = data;
        });
        
      });
    }

    getUserData(associateId: number) {
      this.service.getCurrentUser(associateId).subscribe((result) => {
        this.currentUserId = associateId;

        this.userForm = new FormGroup({
          associateId: new FormControl(result['associateId']),
          techStack: new FormControl(result['techStack']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          projectRole: new FormControl(result['projectRole']),
          systemRole: new FormControl(result['systemRole']),
        });
        this.associateData = result;

        this.dialog.open(this.updateDialog, {
          height: '500px',
          width: '900px',
        });
      });
    }



    displayStyle = 'none';
}
