import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HmnTopBarModule } from '../top-bar';

import { HmnPageComponent } from './page.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		HmnTopBarModule
	],
	exports: [
		HmnPageComponent
	],
	declarations: [
		HmnPageComponent
	]
})
export class HmnPageModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HmnPageModule,
			providers: []
		};
	}
}
