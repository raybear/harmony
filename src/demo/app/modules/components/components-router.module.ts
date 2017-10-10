import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerDemo } from './banner/banner.component';

const COMPONENTS_ROUTES: Routes = [
	{
		path: '',
		component: BannerDemo
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(COMPONENTS_ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class ComponentsRouterModule {}
