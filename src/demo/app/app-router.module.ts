import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopBarComponent } from './modules/components/top-bar/top-bar.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		// TODO: Change this
		component: TopBarComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(APP_ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule {}
