import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  list =[
    {
      number: '1',
      name: 'Home',
      root: '/User-Home',
      img: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png'
    },
    {
      number: '2',
      name: 'Evaluate Candidate',
      root: '/Evaluate-candidate',
      img: 'https://cdn-icons-png.flaticon.com/512/7754/7754510.png'
    },
    {
      number: '3',
      name: 'Lookup Questions',
      root: '/Lookup-question',
      img: 'https://cdn-icons-png.flaticon.com/512/1570/1570139.png'
    }
  ]

  constructor(public nav:SidebarService) { }

  ngOnInit(): void {
  }

}
