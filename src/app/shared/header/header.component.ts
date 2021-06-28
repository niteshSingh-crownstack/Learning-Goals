import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  themeChange() {
    console.log('theme change worked');
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.querySelector('body').setAttribute('theme', 'bootstrap-dark');
    } else {
      document.querySelector('body').removeAttribute('theme');
    }
  }
}
