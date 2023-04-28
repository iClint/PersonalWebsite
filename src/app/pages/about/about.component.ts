import { Component } from '@angular/core';
import { aboutConfig } from './about.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  _config = aboutConfig;
}
