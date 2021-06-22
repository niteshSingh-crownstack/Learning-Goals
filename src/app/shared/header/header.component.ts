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
      document.documentElement.style.setProperty('--clr-green-light', 'black');
      document.documentElement.style.setProperty('--moon', 'var(--clr-white)');
      document.documentElement.style.setProperty(
        '--section1background',
        'var(--clr-grey-1)'
      );
      document.documentElement.style.setProperty(
        '--section2background',
        'var(--clr-black)'
      );

      document.documentElement.style.setProperty(
        '--btnbackground',
        'var(--clr-white)'
      );
      document.documentElement.style.setProperty(
        '--btntextcolor',
        'var(--clr-black)'
      );
      document.documentElement.style.setProperty(
        '--textcolor',
        'var(--clr-white)'
      );
      document.documentElement.style.setProperty(
        '--section3icons',
        'var(--clr-white)'
      );
    }
    // =======================================
    else {
      document.documentElement.style.setProperty(
        '--clr-green-light',
        ' hsl(125, 71%, 66%)'
      );
      document.documentElement.style.setProperty('--moon', 'var(--clr-black)');
      document.documentElement.style.setProperty(
        '--section1background',
        'var(--clr-grey-10)'
      );
      document.documentElement.style.setProperty(
        '--section2background',
        'var(--clr-white)'
      );

      document.documentElement.style.setProperty(
        '--btnbackground',
        'var(--clr-green-light)'
      );
      document.documentElement.style.setProperty(
        '--btntextcolor',
        'var(--clr-white)'
      );
      document.documentElement.style.setProperty(
        '--textcolor',
        'var(--clr-black)'
      );
      document.documentElement.style.setProperty(
        '--section3icons',
        'var(--clr-green-light)'
      );
    }
    // =============================================
  }
}
