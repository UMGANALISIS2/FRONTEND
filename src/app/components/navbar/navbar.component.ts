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
        route: '/main/home',
        type: 'simple'
      },
      {
        name: 'Menú',
        route: '/main/menu',
        type: 'simple'
      },
      {
        name: 'Buscar pasteles',
        route: '/main/search',
        type: 'simple'
      },
      {
        name: 'Otros',
        route: null,
        type: 'dropdown',
        children: [
          {
            name: 'Crear pastel',
            route: '/main/create'
          },
          {
            name: 'Config. rebajas',
            route: '/main'
          },
          {
            name: 'Crear orden',
            route: '/main/order/create'
          }
        ]
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
