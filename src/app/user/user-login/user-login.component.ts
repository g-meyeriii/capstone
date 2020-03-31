import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  message: string ="";

  Check(): void{
    this.usersvc.userLogin(this.user.userName, this.user.password).subscribe(
      res => { this.user =res;
      this.message = this.user.userName;
      console.debug("User:", res);
    },
    err => {
      this.message = "Username/Password not found"
      console.debug("Error loggin in:", err);
    }
    );
  }

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
  }

}
