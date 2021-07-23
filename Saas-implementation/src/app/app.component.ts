import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showThemeOptions: boolean = false;

  themeChange(selectedTheme) {
    console.log('theme change worked');
    document.querySelector('body').setAttribute('theme', selectedTheme);
    this.showThemeOptions = false;
  }
}
