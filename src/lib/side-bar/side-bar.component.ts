import {Component, HostListener, Input, ViewEncapsulation} from '@angular/core';

@Component({
	moduleId:      module.id,
	selector:      'hmn-side-bar',
	templateUrl:   './side-bar.component.html',
	styleUrls:     ['./side-bar.component.scss'],
	host:          {class: 'hmn-sidebar__container'},
	encapsulation: ViewEncapsulation.None
})

export class SideBarComponent
{

	/**
	 * Main product color will be used as product title in logo
	 *
	 * @type {string}
	 */
	@Input('product-color')
	public productColor: string;

	/**
	 * If is Collapsed is true Side bar will be collapsed
	 * @type {boolean}
	 */
	public isCollapsed = false;

	/**
	 * On specific key pressed '[' side bar isCollapsed true or false
	 * @param event
	 */
	@HostListener('window:keypress', ['$event'])
	toggleSidebar(event: any): void
	{
		if (event.keyCode == 91 || event.type == 'click')
		{
			this.isCollapsed = !this.isCollapsed;
		}
	}
}
