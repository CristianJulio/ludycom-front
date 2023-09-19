import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []
  
  constructor(
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.data
    })
  }

  deleteuser(document_number: number) {
    const response = window.confirm("Are you sure?")
    
    if(!response) return

    this.userService.deleteUser(document_number).subscribe((data) => {
      this.users = this.users.filter((user) => user.document_number !== document_number)
    })
  }
}
