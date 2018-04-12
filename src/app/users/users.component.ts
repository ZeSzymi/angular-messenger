import { AuthService } from './../services/auth.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { RemoveMessengerService } from '../services/remove-messenger.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService, private authService: AuthService, private removeMessengerS: RemoveMessengerService) { }
  users: User[] = [];
  usersMessangers: User[] = [];
  userName = '';
  image = 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png';
  onRemoveSub = new Subscription;
  ngOnInit() {
    this.usersService.addUsers(new User(this.authService.getUser(),
    'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'));
    this.usersService.getUsers();
    this.removeMessenger();
    this.usersService.getUsersSubject.subscribe(
      (users) => this.users = users
    );
    this.authService.getUserName();
    this.userName = this.authService.getUser();
    this.authService.userProfileSubject.subscribe(
      (userName) => {
        this.userName = userName;
      }
    );
  }

  removeMessenger() {
    this.onRemoveSub = this.removeMessengerS.onRemoveMessage.subscribe(
      (name) => {
        for (let i = 0; i < this.usersMessangers.length; i += 1) {
          if (this.usersMessangers[i].email === name) {
            this.usersMessangers.splice(i, 1);
          }
        }
      }
    );
  }

  openChat(userName) {
    let state = true;
    for (const userNamePicked of this.usersMessangers) {
      if (userNamePicked.email === userName) {
        state = false;
      }
    }
    if (state) {
      this.usersMessangers.push(new User(userName, ''));
    }
  }

  checkIfEvenOrOdd(index): boolean {
    if (index % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.onRemoveSub.unsubscribe();
  }

}
