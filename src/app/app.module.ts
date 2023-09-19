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
import { CreateComponent as UserCreateComponent } from './users/create/create.component';
import { EditComponent as UserEditComponent } from './users/edit/edit.component';
import { CreateComponent as AreaCreateComponent } from './areas/create/create.component';
import { EditComponent as AreaEditComponent } from './areas/edit/edit.component';

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
      {path: 'users/create', component: UserCreateComponent},
      {path: 'users/edit/:document_number', component: UserEditComponent},
      {path: 'areas', component: AreasComponent},
      {path: 'areas/create', component: AreaCreateComponent},
      {path: 'areas/edit/:areaCode', component: AreaEditComponent},
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
