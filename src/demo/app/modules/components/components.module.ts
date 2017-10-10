import { NgModule } from '@angular/core';

import { ComponentsRouterModule } from './components-router.module';

import { BannerDemo } from './banner/banner.component';
import { TopBarDemo } from './top-bar/top-bar.component';

import { HarmonyModule } from '../../../../lib';

@NgModule({
	imports: [
		ComponentsRouterModule,

		HarmonyModule
	],
	exports: [],
	declarations: [
		BannerDemo,
		TopBarDemo
	]
})
export class ComponentsModule {}
