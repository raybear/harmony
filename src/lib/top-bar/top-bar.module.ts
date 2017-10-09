import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HmnTopBarComponent } from './top-bar.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
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
