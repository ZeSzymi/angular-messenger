import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    linkGet = 'https://floating-lake-53127.herokuapp.com/api/users/show';
    linkPost = 'https://floating-lake-53127.herokuapp.com/api/users/add';
    users: User[] = [];
    getUsersSubject = new Subject<User[]>();
    getCurrentUserSubject = new Subject<User>();
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
        this.http.post(this.linkPost, users).subscribe();
    }

    changeImage(userName, image) {
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                const users = response.json();
                console.log(users);
                for (const user of users) {
                    console.log(user.email, userName);
                    if (user.email === userName) {
                        user.image = image;
                    }
                }
                this.http.post(this.linkPost, users).subscribe();
            }
        );
    }

    getCurrentUser(userName) {
        let users: User[];
        console.log(userName);
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                users = response.json();
                for (const user of users) {
                    if (user.email === userName) {
                        this.getCurrentUserSubject.next(user);
                    }
                }
            }
        );
    }
}
