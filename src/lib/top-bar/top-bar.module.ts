import { ModuleWithProviders, NgModule } from '@angular/core';
import { HmnTopBarComponent } from './top-bar.component';

@NgModule({
	imports: [],
	exports: [
		HmnTopBarComponent
	],
	declarations: [
		HmnTopBarComponent
	]
})
export class HmnTopBarModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: HmnTopBarModule,
			providers: []
		};
	}
}
