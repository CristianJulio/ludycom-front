import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import {ReactiveFormsModule} from '@angular/forms'
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [UsersComponent, CreateComponent, EditComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule, HeaderModule],
  providers: [UserService],
  exports: [UsersComponent]
})
export class UsersModule { }
