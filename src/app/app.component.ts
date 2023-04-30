import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ClintKingston.com';
  isScreenSmall = false;

  ngOnInit(): void {
    this.isScreenSmall = window.innerWidth < 370;
    if (this.isScreenSmall) {
      alert(
        'Device width is too small to display page correctly, try rotating device to land scape.'
      );
    }
  }
}
