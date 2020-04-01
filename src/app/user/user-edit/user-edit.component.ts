import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user : User = new User();
  
  save():void{
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User change sucessfull", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error("Error changing user:",err);
      }
    )
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User edited:",res);
      },
      err => {
        console.error("Error editing user");
      }
    );
  }

}
