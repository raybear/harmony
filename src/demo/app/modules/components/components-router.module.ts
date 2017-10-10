import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopBarDemo } from './top-bar/top-bar.component';

const COMPONENTS_ROUTES: Routes = [
	{
		path: '',
		component: TopBarDemo
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
