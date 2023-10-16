import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
