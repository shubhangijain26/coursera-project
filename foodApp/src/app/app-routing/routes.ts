import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu/menu.component';
import { DishDetailComponent } from '../menu/dishdetail/dishdetail.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const routes : Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'menu',     component: MenuComponent },
    { path: 'dishdetail/:id', component: DishDetailComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
]