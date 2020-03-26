import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';
import { UserEditComponent } from './user-edit/user-edit.component';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string=""): User [] {
    let criteria = searchCriteria.toLowerCase();
    let selUsers: User [] =[];
    for(let user of users){
      if(user.id.toString().includes(criteria)
       || (user.firstname.includes(criteria))
       || (user.lastname.includes(criteria))
       || (user.username.includes(criteria))
       || (user.password.toString().includes(criteria))
       || (user.phone.includes(criteria))
       || (user.email.includes(criteria))
       || (user.isReviwer.toString().includes(criteria))
      ) {
        selUsers.push(user);
        }
      }
    return selUsers;
  }
}
