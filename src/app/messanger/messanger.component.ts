import { Message } from './../message.model';
import { MessageService } from './../services/messages.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css'],
  providers: [MessageService]
})
export class MessangerComponent implements OnInit {
  constructor(private authService: AuthService, private messageService: MessageService) { }
  messages: Message[] = [];
  mainUser: string;
  @Input() secondUser;

  ngOnInit() {
    this.messageService.onMessageChange.subscribe(
      (messages) => {
        this.messages = messages.slice();
        this.messages.splice(0, 1);
        console.log(messages);
      }
    );
    this.messageService.getMessages();
    this.messageService.onGetMessages();
    this.messageService.setSecondUser(this.secondUser);
  }

  checkRightOrLeft(userName) {
    if (this.mainUser === userName) {
      return true;
    } else {
      return false;
    }
  }

}
