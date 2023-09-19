import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../users/users.service';
import { AreaService } from '../areas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users: any[] = []
  
  constructor(
    private areaService: AreaService,
    private userService: UserService,
    private router: Router
  ) {

  }
  
  areaForm = new FormGroup({
    code: new FormControl(0),
    name: new FormControl(''),
    lider: new FormControl(0)
  })

  ngOnInit():void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.data
    })
  }

  onSubmit() {
    this.areaService.createArea(this.areaForm.value).subscribe(() => {
this.router.navigate(['areas'])
    })
  }
}
