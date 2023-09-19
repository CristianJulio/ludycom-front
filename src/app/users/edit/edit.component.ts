import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private document_number: number = 0;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const document_number = +params['document_number']
      this.document_number = document_number
      this.userService.getOneUser(document_number).subscribe((data) => {
        this.userForm.patchValue({
          document_number: data.data.document_number,
          first_name: data.data.first_name,
          second_name: data.data.second_name || "",
          last_name: data.data.last_name,
          second_last_name: data.data.second_last_name,
          email: data.data.email,
          salary: data.data.salary,
          date_of_birth: data.data.date_of_birth.split('T')[0]
        })
      })
    })
  }

  onSubmit() {
    this.userService.updateUser(this.userForm.value, this.document_number).subscribe(() => {
      console.log('updated')
      this.router.navigate(['users'])
    })
  }
}
