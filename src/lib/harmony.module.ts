import {ModuleWithProviders, NgModule} from '@angular/core';

import {HmnFooterModule} from './footer/footer.module';
import {HmnPageModule} from './page';
import {HmnTopBarModule} from './top-bar';
import {HmnSideBarModule} from './side-bar/side-bar.module';

const HARMONY_MODULES = [
	HmnFooterModule,
	HmnPageModule,
	HmnTopBarModule,
	HmnSideBarModule
];

@NgModule({
	imports: [
		HmnFooterModule.forRoot(),
		HmnPageModule.forRoot(),
		HmnTopBarModule.forRoot(),
		HmnSideBarModule.forRoot()
	],
	exports: HARMONY_MODULES
})
export class HarmonyRootModule {}

@NgModule({
	imports: HARMONY_MODULES,
	exports: HARMONY_MODULES
})
export class HarmonyModule
{
	public static forRoot(): ModuleWithProviders
	{
		return {
			ngModule: HarmonyRootModule
		};
	}
}
