import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    MatDialogModule, 
  ],
  providers: [DishService, LeaderService],
  bootstrap: [AppComponent],
  entryComponents : [LoginComponent]
})
export class AppModule { }
