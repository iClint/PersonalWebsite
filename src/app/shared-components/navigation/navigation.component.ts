import { Component } from '@angular/core';
import { navigationConfig } from './navigation.config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  _config = navigationConfig;

  numberOfLinks = this._config.links.length;
  menuHeight = this.numberOfLinks * 40;

  classApplied = false;

  toggleMenu() {
    this.classApplied = !this.classApplied;
  }
}
