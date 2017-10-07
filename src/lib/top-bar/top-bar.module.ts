import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HmnTopBarComponent } from './top-bar.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		HmnTopBarComponent
	],
	declarations: [
		HmnTopBarComponent
	]
})
export class HmnTopBarModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HmnTopBarModule,
			providers: []
		};
	}
}
