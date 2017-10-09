import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HmnFooterComponent } from './footer.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		HmnFooterComponent
	],
	declarations: [
		HmnFooterComponent
	]
})
export class HmnFooterModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HmnFooterModule,
			providers: []
		};
	}
}
