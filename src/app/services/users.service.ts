import { User } from './../user.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
    constructor(private http: Http) {}
    linkGet = 'http://localhost:3001/api/users/show';
    linkPost = 'http://localhost:3001/api/users/add';
    users: User[] = [];
    getUsersSubject = new Subject<User[]>();

    addUsers(user: User) {
        let users: User[];
        let addUserStatus = true;
        console.log(user);
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                users = response.json();
                for (let i = 0; i < users.length; i += 1) {
                    if (users[i].email === user.email) {
                        addUserStatus = false;
                    }
                }
                if (addUserStatus) {
                    users.push(user);
                    this.postUsers(users);
                }
            }
        );
    }

    getUsers() {
        let users: User[];
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                users = response.json();
                this.users = users;
                this.getUsersSubject.next(this.users);
            }
        );
    }

    postUsers(users) {
        console.log(JSON.stringify(users));
        this.http.post(this.linkPost, users).subscribe();
    }
}
