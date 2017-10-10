import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: 'app/modules/home/home.module#HomeModule'
	},
	{
		path: 'components',
		loadChildren: 'app/modules/components/components.module#ComponentsModule'
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
