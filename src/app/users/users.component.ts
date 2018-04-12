import { AuthService } from './../services/auth.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
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
  messengers = [];
  userName = '';
  onRemoveSub = new Subscription;
  ngOnInit() {
    this.usersService.addUsers(new User(this.authService.getUser()));
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
        console.log(userName);
      }
    );
  }

  removeMessenger() {
    this.onRemoveSub = this.removeMessengerS.onRemoveMessage.subscribe(
      (name) => {
        for (let i = 0; i < this.messengers.length; i += 1) {
          console.log(i);
          if (this.messengers[i] === name) {
            this.messengers.splice(i, 1);
          }
        }
      }
    );
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

  logOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.onRemoveSub.unsubscribe();
    this.authService.logout();
  }

}
