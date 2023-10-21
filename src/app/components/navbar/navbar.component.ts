import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  menus: any[] = []

  ngOnInit(): void {
      // this.router.events.subscribe((e) =)
  }

  constructor(private router: Router, private cart: CartService, private toast: ToastrService){
    this.menus = [
      {
        name: 'Inicio',
        route: '/main/home'
      },
      {
        name: 'Menú',
        route: '/main/menu'
      },
      {
        name: 'Buscar pasteles',
        route: '/main/search'
      },
      {
        name: 'Configurar rebajas',
        route: '/main/discounts'
      },
      {
        name: 'Crear pastel',
        route: '/main/create/'
      }
    ]
  }

  get items():any[]{
    const c = this.cart.getCart()
    return c
  }

  public payCart(){
    this.toast.success("Orden pagada con éxito", "Pagos", {
      timeOut: 5000
    })
  }
}
