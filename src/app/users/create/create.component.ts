import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  
  userForm = new FormGroup({
    document_number: new FormControl(0),
    first_name: new FormControl(''),
    second_name: new FormControl(''),
    last_name: new FormControl(''),
    second_last_name: new FormControl(''),
    email: new FormControl(''),
    date_of_birth: new FormControl(''),
    salary: new FormControl(0)
  })

  onSubmit() {
    this.userService.createUser(this.userForm.value).subscribe((data) => {
      this.router.navigate(['users'])
    })
  }
}
