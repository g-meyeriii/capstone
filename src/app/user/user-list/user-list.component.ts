import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchCriteria: string ="";

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.list().subscribe(
      res => {
        this.users =res;
      console.debug("Users-list", res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
