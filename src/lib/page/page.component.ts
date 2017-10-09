import { Component, Input } from '@angular/core';

import { HmnTopBarLink } from '../top-bar';

@Component({
	moduleId: module.id,
	selector: 'hmn-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class HmnPageComponent {

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
	 *
	 * @type {string}
	 */
	@Input('product-title')
	public productTitle: string;

	/**
	 * Sub title that will be displayed bellow product title.
	 * Note: In case product title is null, sub title won't be displayed.
	 *
	 * @type {string}
	 */
	@Input('product-sub-title')
	public productSubTitle: string;

	/**
	 * Main product color will be used as product title in logo
	 *
	 * @type {string}
	 */
	@Input('product-color')
	public productColor: string;

	/**
	 * Array of menu elements used to render top navigation.
	 *
	 * @type {HmnTopBarLink[]}
	 */
	@Input('menu')
	public menu: HmnTopBarLink[];

	/**
	 * Placeholder for search input.
	 * If none were specified, search placeholder won't be displayed.
	 *
	 * @type {string}
	 */
	@Input('search-placeholder')
	public searchPlaceholder: string;

	/**
	 * Image to be used if user profile image is unknown.
	 * Default is 'no-avatar.png'
	 *
	 * @type {string}
	 */
	@Input('no-avatar-image')
	public noAvatarImage = 'no-avatar.png';

	/**
	 * Image to be used as a user profile avatar.
	 * If none were specified, [no-avatar-image] will be used.
	 *
	 * @type {string}
	 */
	@Input('avatar-image')
	public avatarImage: string;
}
