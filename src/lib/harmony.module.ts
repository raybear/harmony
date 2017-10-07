import { ModuleWithProviders, NgModule } from '@angular/core';

const HARMONY_MODULES = [];

@NgModule({
	imports: [],
	exports: HARMONY_MODULES
})
export class HarmonyRootModule {}

@NgModule({
	imports: HARMONY_MODULES,
	exports: HARMONY_MODULES
})
export class HarmonyModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: HarmonyRootModule
		};
	}
}
