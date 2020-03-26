import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] =[
    new Menu("Users","/users/list","The user list page")
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
