import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HmnFooterModule } from '../footer/footer.module';
import { HmnTopBarModule } from '../top-bar';

import { HmnPageComponent } from './page.component';
import { HmnSideBarModule } from '../side-bar/side-bar.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		HmnTopBarModule,
		HmnSideBarModule,
		HmnFooterModule,
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
