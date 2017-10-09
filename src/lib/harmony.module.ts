import { ModuleWithProviders, NgModule } from '@angular/core';

import { HmnPageComponent, HmnPageModule } from './page';
import { HmnTopBarModule } from './top-bar';

const HARMONY_MODULES = [
	HmnPageComponent,
	HmnTopBarModule
];

@NgModule({
	imports: [
		HmnPageModule.forRoot(),
		HmnTopBarModule.forRoot()
	],
	exports: HARMONY_MODULES
})
export class HarmonyRootModule {}

@NgModule({
	imports: HARMONY_MODULES,
	exports: HARMONY_MODULES
})
export class HarmonyModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HarmonyRootModule
		};
	}
}
