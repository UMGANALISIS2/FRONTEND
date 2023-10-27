import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FillingsRoutingModule } from './fillings-routing.module';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FillingsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FillingsModule { }
