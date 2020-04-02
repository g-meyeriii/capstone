import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  message: string ="Login Ready";

  login(): void{
    this.usersvc.login(this.user.userName, this.user.password).subscribe(
      res => { 
        this.user =res;
      this.systemsvc.currentUser=this.user;
      console.debug("User:", res);
      this.router.navigateByUrl("/request/list");
    },
    err => {
      this.message = "Username/Password not found"
      console.debug("Error logging in:", err);
      this.router.navigateByUrl("/users/login");
    }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService,
    private router: Router
   
  ) { }

  ngOnInit(): void {
  }

}
