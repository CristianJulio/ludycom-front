import { AreasComponent } from './areas.component';
import { AreaService } from './areas.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [AreasComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  providers: [AreaService]
})
export class AreasModule { }
