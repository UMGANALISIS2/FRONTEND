import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlavorsRoutingModule } from './flavors-routing.module';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FlavorsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FlavorsModule { }
