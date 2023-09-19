import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AreasComponent } from './areas/areas.component';
import { UsersModule } from './users/users.module';
import { AreasModule } from './areas/areas.module';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/create', component: CreateComponent},
      {path: 'users/edit/:document_number', component: EditComponent},
      {path: 'areas', component: AreasComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),
    LoginModule,
    DashboardModule,
    UsersModule,
    AreasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
