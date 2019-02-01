import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorDirective } from './directives/anchor.directive';
import { MenuDirective } from './directives/menu.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { MenuItemDirective } from './directives/menuItem.directive';

@NgModule({
	imports: [CommonModule, OverlayModule],
	declarations: [
		AnchorDirective,
		MenuDirective,
		MenuComponent,
		MenuItemComponent,
		MenuWrapperComponent,
		MenuItemDirective
	],
	providers: [],
	exports: [
		AnchorDirective,
		MenuItemComponent,
		MenuComponent,
		MenuItemDirective
	],
	entryComponents: [MenuWrapperComponent]
})
export class Ng2rcmModule {}
