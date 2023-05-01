import { Component } from '@angular/core';

export interface ContactForm {

}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  email: string | undefined;
  name: string | undefined;
  message: string | undefined;
}
