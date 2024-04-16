import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/service/navbar.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-upload-questions',
  templateUrl: './upload-questions.component.html',
  styleUrls: ['./upload-questions.component.css'],
})
export class UploadQuestionsComponent implements OnInit {
    // time=timeStamp;
    @ViewChild('deleteFile') deleteFile!: TemplateRef<any>;
    fail: boolean = false;
    success: boolean = false;
    submitted:boolean=false;
    uploadF:boolean=false;

    uploadQuestionForm = new FormGroup({
      technology_name: new FormControl(null, [Validators.required]),
      file_name: new FormControl(null, Validators.required),
      uploaded_by: new FormControl('User'),
      // uploaded_timestamp: new FormControl(''),
      // technology_stack: new FormControl(''),
    });

    // To validate Register
    get technology_name() {
      return this.uploadQuestionForm.get('technology_name') as FormControl;
    }
    get file_name() {
      return this.uploadQuestionForm.get('file_name') as FormControl;
    }

    uploadedFileNames: string[] = [];
    constructor(
        private upload: UploadService,
        public nav: SidebarService,
        public navbar: NavbarService,
        private readonly dialog: MatDialog,
        private router: Router
    ) {}

    // fileUpload(event: any) {
    //   const file = event.currentTarget.files[0];
    //   if (file.size >= 8000000) {
    //     this.fail=true;
    //     ('File size should be less than 10 MB');
    //   }
    //   // else if (file.type !== '/docx' || file.type !== '/xlsx'){
    //   //   alert('Choose the correct file');
    //   // }
    // }
    ngOnInit(): void {
      this.nav.show();
      this.nav.doSomethingElseUseful();
      this.navbar.show();
      this.navbar.doSomethingElseUseful();
    }

    uploadField = document.getElementById('file');
    // To set the upload file limit
    // myRestrictions: FileRestrictions = {
    //   minFileSize: 1048576,
    // };a
    fileDelete() {
      this.dialog.open(this.deleteFile, {
        height: '300px',
        width: '600px',
      });
    }

    uploadFile() {
      this.submitted=true;
      if (this.uploadQuestionForm.invalid) {
        this.fail = true;
      }
      // else if (
      //     this.uploadQuestionForm.value.FormControl['technology_name'].valid &&
      //     this.uploadQuestionForm.value.FormControl['file_name'].invalid) {
      //       this.fail = true;
      // }
      else {
        this.upload.uploadFile(this.uploadQuestionForm.value).subscribe((result) => {
          this.uploadQuestionForm.reset();

        });
        this.uploadF=true;

      }

    }
    removeFile() {
      this.success=true;
      setTimeout(() => {
        this.router.navigate(['/UploadQuestion']);
      }, 2000);


    }
}
