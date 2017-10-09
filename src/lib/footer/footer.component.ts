import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hmn-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class HmnFooterComponent {

	/**
	 * Name of product vendor
	 *
	 * @type {string}
	 */
	@Input('productVendor')
	public productVendor = 'RayBear, Ltd';

	/**
	 * Staring year of product copyright.
	 *
	 * In case where product copyright year is before current year
	 * both start and current year will be displayed automatically.
	 *
	 * @type {number}
	 */
	@Input('productCopyrightYear')
	public productCopyrightYear: number;

	/**
	 * Current version number of the product
	 *
	 * @type {string}
	 */
	@Input('productVersion')
	public productVersion = '1.0.0';

	/**
	 * Additional product version name
	 *
	 * @type {string}
	 */
	@Input('productVersionName')
	public productVersionName: string;

	/**
	 * Formats the copyright year string.
	 *
	 * @return {string}
	 */
	public getCopyrightYear(): string {

		const year = new Date().getFullYear();

		if (year > this.productCopyrightYear) {
			return `${this.productCopyrightYear} - ${year}`;
		} else {
			return `${this.productCopyrightYear}`;
		}
	}
}
