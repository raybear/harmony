import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HarmonyModule } from '../../lib/harmony.module';
import { AppRouterModule } from './app-router.module';
import { TopBarComponent } from './modules/components/top-bar/top-bar.component';

@NgModule( {
	imports: [
		BrowserModule,

		HarmonyModule.forRoot(),

		AppRouterModule
	],
	declarations: [
		AppComponent,

		TopBarComponent
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {}
