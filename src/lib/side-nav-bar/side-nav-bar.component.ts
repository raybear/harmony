
import {Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hmn-side-nav-bar',
	templateUrl: 'side-nav-bar.component.html',
	styleUrls: ['side-nav-bar.component.scss']
})

export class HmnSideNavBarComponent {
	@Input()
	productColor: string;

	menuItems: any[] = [
		'Component',
		'Dropdown',
		'Inputs',
		'Forms',
		'Select'
	];

	hovered: number;
}
