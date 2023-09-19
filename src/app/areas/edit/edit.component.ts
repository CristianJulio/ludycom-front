import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AreaService } from '../areas.service';
import { UserService } from 'src/app/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private areaCode: number = 0
  users: any[] = []
  
  constructor(
    private areaService: AreaService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  areaForm = new FormGroup({
    code: new FormControl(0),
    name: new FormControl(''),
    lider: new FormControl(0)
  })

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const areaCode = +params['areaCode']
      this.areaCode = areaCode
      this.areaService.getOneArea(areaCode).subscribe((data) => {
        this.areaForm.patchValue({
          code: data.data.code,
          name: data.data.name,
          lider: data.data.lider
        })
      })
    })

    this.userService.getUsers().subscribe((data) => {
      this.users = data.data
    })
  }

  onSubmit() {
    this.areaService.updateArea(this.areaCode, this.areaForm.value).subscribe(() => {
      this.router.navigate(['areas'])
    })
  }
}
