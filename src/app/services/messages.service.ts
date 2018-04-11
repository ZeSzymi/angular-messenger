import { AuthService } from './auth.service';
import { Message } from './../message.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MessageService implements OnDestroy {
    subscription: Subscription;
    linkGet = 'http://localhost:3001/api/users/getdirs';
    linkPost = 'http://localhost:3001/api/users/create';
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    setSecondUser(user) {
        this.additionalUser = user;
    }

    onGetMessages() {
        setInterval(() => this.getMessages(), 3000);
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
                this.http.post(this.linkPost,{'fileName' : this.userName + '&' + this.additionalUser, 'messages': this.messages}).subscribe(
                    (resp: Response) => {
                    }
                );
            }
        );
    }
}
