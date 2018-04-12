import { MessageService } from './../services/messages.service';
import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from '../models/message.model';

@Directive({
  selector: '[appDisableEnter]'
})
export class DisableEnterDirective {

    constructor(private el: ElementRef, private messageService: MessageService) {}

    @HostListener('keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.messageService.AddMessages(this.el.nativeElement.value);
            this.el.nativeElement.value = '';
            event.preventDefault();
        }
    }
}
