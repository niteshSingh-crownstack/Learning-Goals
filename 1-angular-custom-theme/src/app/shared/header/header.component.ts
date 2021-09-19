import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showThemeOptions: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  themeChange(selectedTheme) {
    console.log('theme change worked');
    document.querySelector('body').setAttribute('theme', selectedTheme);
    this.showThemeOptions = false;
  }
}
