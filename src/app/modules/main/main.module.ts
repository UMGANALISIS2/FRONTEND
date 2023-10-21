import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CakeService } from 'src/app/services/cake.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CartService } from 'src/app/services/cart.service';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    SearchComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [CakeService, CartService]
})
export class MainModule { }
