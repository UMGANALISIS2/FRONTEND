import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){
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
      }
    ]
  }
}
