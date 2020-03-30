import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] =[
    new Menu("Users","/users/list","The user list page"),
    new Menu("Vendors","/vendors/list","The vendor list page"),
    new Menu("Products","/products/list","The product list page"),
    new Menu("Requests","requests/list","The request list page")
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
