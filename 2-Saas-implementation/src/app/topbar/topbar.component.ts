import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  showThemeOptions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  themeChange(selectedTheme) {
    console.log('theme change worked');
    document.querySelector('body').setAttribute('theme', selectedTheme);
    this.showThemeOptions = false;
  }
}
