import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hmn-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class HmnBannerComponent {

	/**
	 * Type of banner.
	 *
	 * @type {HmnBannerType}
	 */
	@Input('type')
	public type: HmnBannerType = 'info';

	public getBannerCssClass(): string {

		return `hmn-banner--${this.type}`;
	}

	public getBannerIcon(): string {

		let icon: string;

		switch (this.type) {
			case 'info':
			default:
				icon = 'exclamation-triangle';
				break;
			case 'warning':
				icon = 'question-circle';
				break;
			case 'error':
				icon = 'times-circle';
				break;
			case 'success':
				icon = 'check-circle';
				break;
		}

		return icon;
	}
}

export type HmnBannerType = 'info' | 'warning' | 'error' | 'success';
