import { Component, Input } from '@angular/core';
import { headerConfig } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() public title: string | undefined;
  public _config = headerConfig;
}
