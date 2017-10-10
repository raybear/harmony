import { Component } from '@angular/core';

import { HmnMenuLink } from '../../lib';

@Component( {
	selector: 'hmn-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

	public topBarMenuItems: HmnMenuLink[] = [
		{
			title: 'Home',
			link: '/home'
		},
		{
			title: 'Components',
			link: '/components'
		},
		{
			title: 'Guidelines',
			link: '/guidelines'
		}
	];
}
