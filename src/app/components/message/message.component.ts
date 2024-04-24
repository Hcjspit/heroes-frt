import { Component } from '@angular/core';
import { MessageService } from '../../service/message-service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}
