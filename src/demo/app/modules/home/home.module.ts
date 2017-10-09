import { NgModule } from '@angular/core';

import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		HomeRouterModule
	],
	exports: [],
	declarations: [
		HomeComponent
	]
})
export class HomeModule {}
