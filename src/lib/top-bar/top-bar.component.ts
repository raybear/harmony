import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hmn-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class HmnTopBarComponent {

	/**
	 * Image that should be used as a logo.
	 * Image should be ideally 45px height to avoid browser optimization.
	 *
	 * @type {string}
	 */
	@Input('product-logo')
	public productLogoImage: string;

	/**
	 * Location of logo image relative to root directory.
	 * Default is 'assets/'
	 *
	 * @type {string}
	 */
	@Input('product-logo-path')
	public productLogoPath = '/assets/';

	/**
	 * Name that will be displayed at the right side of logo image.
	 */
	@Input('product-title')
	public productTitle: string;

	@Input('product-sub-title')
	public productSubTitle: string;

	@Input('product-color')
	public productColor: string;
}
