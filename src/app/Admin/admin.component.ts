import { Component } from '@angular/core';
import {TextFieldModule} from '@angular/cdk/text-field';

@Component({
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  title = 'Contact us form';
  messageTitle: string;
  messageBody: string;

  sendMessage() : void {
    alert(this.messageTitle + "\n\r" + this.messageBody);
  }
}
