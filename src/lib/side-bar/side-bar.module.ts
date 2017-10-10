import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SideBarComponent} from './side-bar.component';
import {HmnSideNavBarModule} from '../side-nav-bar/side-nav-bar.module';

@NgModule({
	imports:[
		CommonModule,
		HmnSideNavBarModule
	],
	exports:[
		SideBarComponent
	],
	declarations:[
		SideBarComponent
	]
})

export class HmnSideBarModule {
	public static forRoot(): ModuleWithProviders
	{
		return {
			ngModule:  HmnSideBarModule,
			providers: []
		};
	}
}
