import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
    declarations: [MenuComponent, DishDetailComponent],
    imports: [SharedModule],
    exports: [MenuComponent, DishDetailComponent]
})

export class MenuModule {}