import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HmnBannerComponent } from './banner.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		HmnBannerComponent
	],
	declarations: [
		HmnBannerComponent
	]
})
export class HmnBannerModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HmnBannerModule,
			providers: []
		};
	}
}
