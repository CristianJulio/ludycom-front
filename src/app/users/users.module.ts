import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users.service';



@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [UserService],
  exports: [UsersComponent]
})
export class UsersModule { }
