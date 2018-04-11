import { AuthService } from './../services/auth.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService, private authService: AuthService) { }
  users: User[] = [];
  messengers = [];
  userName = '';
  ngOnInit() {
    this.usersService.addUsers(new User(this.authService.getUser()));
    this.usersService.getUsers();
    this.usersService.getUsersSubject.subscribe(
      (users) => this.users = users
    );
    this.authService.getUserName();
    this.userName = this.authService.getUser();
    this.authService.userProfileSubject.subscribe(
      (userName) => {
        this.userName = userName;
        console.log(userName);
      }
    );
  }

  isAuth() {
    console.log(this.authService.isAuthenticated);
  }

  isAuth2() {
    this.authService.logout();
  }

  openChat(userName) {
    this.messengers.push(userName);
  }

  checkIfEvenOrOdd(index): boolean {
    if (index % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

}
