import { ModuleWithProviders, NgModule } from '@angular/core';

import { HmnBannerModule } from './banner';
import { HmnFooterModule } from './footer/footer.module';
import { HmnPageModule } from './page';
import { HmnTopBarModule } from './top-bar';
import { HmnSideBarModule } from './side-bar';

const HARMONY_MODULES = [
	HmnBannerModule,
	HmnFooterModule,
	HmnPageModule,
	HmnTopBarModule,
	HmnSideBarModule
];

@NgModule( {
	imports: [
		HmnBannerModule.forRoot(),
		HmnFooterModule.forRoot(),
		HmnPageModule.forRoot(),
		HmnTopBarModule.forRoot(),
		HmnSideBarModule.forRoot()
	],
	exports: HARMONY_MODULES
} )
export class HarmonyRootModule {}

@NgModule( {
	imports: HARMONY_MODULES,
	exports: HARMONY_MODULES
} )
export class HarmonyModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HarmonyRootModule
		};
	}
}
