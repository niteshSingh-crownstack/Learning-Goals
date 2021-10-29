import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/filter.svg'));
		iconRegistry.addSvgIcon(
			'notification-bell',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icon/notification-bell.svg')
		);
	}
	ngOnInit(): void {}
}
