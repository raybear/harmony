import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HarmonyModule } from '../../lib/harmony.module';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		HarmonyModule.forRoot()
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {}
