import { Message } from './../message.model';
import { MessageService } from './../services/messages.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { RemoveMessengerService } from '../services/remove-messenger.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css'],
  providers: [MessageService]
})
export class MessangerComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService,
  private messageService: MessageService, private removeMessengerS: RemoveMessengerService) { }
  messages: Message[] = [];
  mainUser: string;
  collapse = false;
  interval;
  onMessageSub = new Subscription();
  @Input() secondUser;
  @ViewChild('scroll') scroll;
  ngOnInit() {
    this.mainUser = this.authService.getUser();
    this.onMessageSub = this.messageService.onMessageChange.subscribe(
      (messages) => {
        this.messages = messages.slice();
        this.messages.splice(0, 1);
        this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
      }
    );
    this.messageService.getMessages();
    this.interval = setInterval(() => this.messageService.getMessages(), 1000);
    this.messageService.setSecondUser(this.secondUser);
  }

  checkRightOrLeft(userName) {
    if (this.mainUser === userName) {
      return true;
    } else {
      return false;
    }
  }

  removeMessenger() {
    this.removeMessengerS.onRemoveMessage.next(this.secondUser);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.onMessageSub.unsubscribe();
  }

}
