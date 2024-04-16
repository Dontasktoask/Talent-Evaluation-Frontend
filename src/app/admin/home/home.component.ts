import { AdminhomeService } from './../../service/adminhome.service';
import { Component, OnInit } from '@angular/core';
import { AdminHome } from 'src/app/model/adminhome';
import { SidebarService } from 'src/app/service/sidebar.service';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  evaluationData: AdminHome[] = [];
  searchText='';
  completedData: any = [];
  pendingData: any = [];
  data: any;
  p: number = 1;
  c:number = 1;

  constructor(private service: AdminhomeService, public nav:SidebarService,public navbar: NavbarService) {
  }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.navbar.show();
    this.navbar.doSomethingElseUseful();

    this.service.getEvaluationData().subscribe((result) => {
      console.log(result);
      this.data=result;
      this.completedData=this.data?.Completed;
      this.pendingData=this.data?.Pending;
    });
  }
}
