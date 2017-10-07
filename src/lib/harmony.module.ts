import { ModuleWithProviders, NgModule } from '@angular/core';

import { HmnTopBarModule } from './top-bar/top-bar.module';

const HARMONY_MODULES = [
	HmnTopBarModule
];

@NgModule({
	imports: [
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
