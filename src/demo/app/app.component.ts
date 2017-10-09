import { Component } from '@angular/core';

import { HmnTopBarLink } from '../../lib/top-bar';

@Component( {
	selector: 'hmn-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

	public topBarMenuItems: HmnTopBarLink[] = [
		{
			title: 'Home',
			link: '/'
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
