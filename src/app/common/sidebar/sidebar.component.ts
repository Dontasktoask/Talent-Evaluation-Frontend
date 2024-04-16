import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  list =[
    {
      number: '1',
      name: 'Home',
      root: '/Home',
      img: 'https://cdn-icons-png.flaticon.com/512/9424/9424650.png',
      role: 'Admin',
    },
    {
      number: '2',
      name: 'Upload Questions',
      root: '/UploadQuestion',
      img: 'https://cdn-icons-png.flaticon.com/512/81/81081.png',
    },
    {
      number: '3',
      name: 'Assign Evaluations',
      root: '/AssignEvaluation',
      img: 'https://cdn-icons-png.flaticon.com/512/5974/5974867.png',
    },
    {
      number: '4',
      name: 'User Managment',
      root: '/UserManagment',
      img: 'https://cdn-icons-png.flaticon.com/512/1570/1570139.png',
    },
    // {
    //   number:'5',
    //   name:'Home',
    //   root:'/User-Home',
    //   img:'https://cdn-icons-png.flaticon.com/512/1946/1946436.png'
    // },
    // {
    //   number:'6',
    //   name:'Evaluate Candidate',
    //   root:'/Evaluate-candidate',
    //   img:'https://cdn-icons-png.flaticon.com/512/7754/7754510.png'
    // },
    // {
    //   number:'7',
    //   name:'Lookup Questions',
    //   root:'/Lookup-question',
    //   img:'https://cdn-icons-png.flaticon.com/512/1570/1570139.png'
    // }
  ]

  constructor(public nav:SidebarService) { }


  ngOnInit(): void {
  }

}
