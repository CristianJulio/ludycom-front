import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/users.service';
import { AreaService } from '../areas/areas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersCount = {
    active: 0,
    inActive: 0
  }
  areasCount = {
    active: 0,
    inActive: 0
  }
  
  constructor(
    private userService: UserService,
    private areaService: AreaService
  ) {}
  
  ngOnInit(): void {
    this.areaService.getCount().subscribe(data => {
      this.areasCount = data.data
    })
    
    this.userService.getCount().subscribe((data) => {
      this.usersCount = data.data
    })
  }

}
