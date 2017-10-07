import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HmnTopBarLink } from './top-bar-link.interface';

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

	@Input('menu')
	public menuItems: HmnTopBarLink[];

	@Input('search-placeholder')
	public searchPlaceholder: string;

	@Input('no-avatar-image')
	public noAvatarImage = 'no-avatar.png';

	@Input('avatar-image')
	public avatarImage: string;

	@Output()
	public searchEmitter: EventEmitter<string> = new EventEmitter<string>();

	public getAvatarImage(): string {
		// TODO: Change avatar logo path to be dynamic if required
		return this.avatarImage ? this.productLogoPath + this.avatarImage : this.productLogoPath + this.noAvatarImage;
	}

	public emitSearch(query: string): void {
		this.searchEmitter.emit(query);
	}
}
