import { NgModule } from '@angular/core';

import { ComponentsRouterModule } from './components-router.module';

import { TopBarDemo } from './top-bar/top-bar.component';

@NgModule({
	imports: [
		ComponentsRouterModule
	],
	exports: [],
	declarations: [
		TopBarDemo
	]
})
export class ComponentsModule {}
