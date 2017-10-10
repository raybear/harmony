import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HmnSideNavBarComponent} from './side-nav-bar.component';

@NgModule({
	imports:[
		CommonModule
	],
	exports: [
		HmnSideNavBarComponent
	],
	declarations: [
		HmnSideNavBarComponent
	]
})

export class HmnSideNavBarModule {
	public static forRoot(): ModuleWithProviders
	{
		return {
			ngModule:  HmnSideNavBarModule,
			providers: []
		};
	}
}
