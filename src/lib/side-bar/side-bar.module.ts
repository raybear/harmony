import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SideBarComponent} from './side-bar.component';

@NgModule({
	imports:[
		CommonModule
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
