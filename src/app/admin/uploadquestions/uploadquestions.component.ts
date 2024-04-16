import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploadquestions',
  templateUrl: './uploadquestions.component.html',
  styleUrls: ['./uploadquestions.component.css']
})
export class UploadquestionsComponent implements OnInit {
  uploadQuestionForm = new FormGroup({
    technology_name: new FormControl(null, Validators.required),
    file_name: new FormControl(null, Validators.required),
  });

  displayStyle = '';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  deletefile(){
    this.displayStyle = 'none';
  }

  uploadedFileNames: string[]=[];
  // fileUrl: string ="C:\\fakepath\\";


  constructor(private router:ActivatedRoute) {}

  // fileUpload(event: any) {
  //   const file = event.currentTarget.files[0];
  //   // file.type == '/xlsx' &&
  //   if (file.type == 'file/xlsx' && file.size <= 5000000) {
  //     const formObj = new FormData();
  //     formObj.append('file', file);
  //     this.upload.uploadFile(this.uploadQuestionForm.value,).subscribe((result:any)=>{
  //     console.log(result);

  //     this.uploadedFileNames.push(result);

  //   })
  //     this.upload.uploadFile(formObj).subscribe((result:any) => {
  //       debugger;
  //       console.log(result);
  //       this.uploadedFileNames.push(result);
  //     });
  //   } else {
  //     if(file.size > 10000000){
  //       alert('File size should be less than 10 MB');
  //     }
  //     else{
  //       alert("File shoulf be .docx or .xlsx");
  //     }
  //   }


  // }

  fileUpload(){
    console.log('fileupload');
  }
  ngOnInit(): void {}

  //Validation Login
  get vtech() {
    return this.uploadQuestionForm.get('technology_name');
  }
  get vfile() {
    return this.uploadQuestionForm.get('file_name');
  }

  uploadField = document.getElementById('file');
  // To set the upload file limit
  // myRestrictions: FileRestrictions = {
  //   minFileSize: 1048576,
  // };
  itemsPerPage = 5;
  currentPage = 1;

  data = [
    {
      AId: '213412',
      AsName: 'Mark',
      role: 'Developer',
      updated: 'Antony',
      time: '30-feb-2023',
    },
    {
      AId: '213423',
      AsName: 'Mark',
      role: 'Developer',
      updated: 'Antony',
      time: '30-feb-2023',
    },
    {
      AId: '213453',
      AsName: 'Mark',
      role: 'Developer',
      updated: 'Antony',
      time: '30-feb-2023',
    },
    {
      AId: '213432',
      AsName: 'Mark',
      role: 'Developer',
      updated: 'Antony',
      time: '30-feb-2023',
    },
  ];
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.data.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  // uploadFile() {
  //   console.log(this.uploadQuestionForm.value);
  //   this.upload
  //     .uploadFile(this.uploadQuestionForm.value)
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  // }


}
