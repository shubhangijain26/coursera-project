import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

@NgModule({
    declarations: [MenuComponent, MenuDetailsComponent],
    imports: [SharedModule],
    exports: [MenuComponent, MenuDetailsComponent]
})

export class MenuModule {}