import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string =" "): User [] {
    let criteria = searchCriteria.toLowerCase();
    let selUsers: User [] =[];
    for(let user of users){
      if(user.id.toString().includes(criteria)
       || (user.firstName.toLowerCase().includes(criteria))
       || (user.lastName.toLowerCase().includes(criteria))
       || (user.userName.toLowerCase().includes(criteria))
       || (user.password.toLowerCase().includes(criteria))
       || (user.phone.includes(criteria))
       || (user.email.toLowerCase().includes(criteria))
       || (user.isReviewer.valueOf().toString().includes(criteria))
       || (user.isAdmin.valueOf().toString().includes(criteria))
      ) {
        selUsers.push(user);
        }
      }
    return selUsers;
  }
}
