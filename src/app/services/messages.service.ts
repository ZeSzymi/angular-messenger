import { AuthService } from './auth.service';
import { Message } from './../models/message.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class MessageService {
    linkGet = 'https://floating-lake-53127.herokuapp.com/api/users/getdirs';
    linkPost = 'https://floating-lake-53127.herokuapp.com/api/users/create';
    messages: Message[] = [];
    messagesFinal: Message[] = [];
    additionalUser = 'test@test.com';
    headers: Headers = new Headers();
    userName = '';
    onMessageChange = new Subject<Message[]>();
    onMessageAdded = new Subject<Message[]>();

    constructor(private http: Http, private authService: AuthService) {
        this.userName = this.authService.getUser();
    }

    setSecondUser(user) {
        this.additionalUser = user;
    }

    getMessages() {
        this.http.post(this.linkGet, {'fileName' : this.userName + '&' + this.additionalUser}).subscribe(
            (response: Response) => {
                this.messages = response.json();
                this.onMessageChange.next(this.messages);
            }
        );
    }

    AddMessages(messageContent: string) {
        const message = new Message(messageContent, this.userName);
        this.messages.push(message);
        this.onMessageChange.next(this.messages);
        this.http.post(this.linkGet, {'fileName' : this.userName + '&' + this.additionalUser }).subscribe(
            (response: Response) => {
                console.log(response);
                this.messages = response.json();
                this.messages.push(message);
                this.onMessageChange.next(this.messages);
                this.http.post(this.linkPost, {'fileName' : this.userName + '&' + this.additionalUser, 'messages': this.messages})
                .subscribe(
                    (resp: Response) => {
                    }
                );
            }
        );
    }
}
