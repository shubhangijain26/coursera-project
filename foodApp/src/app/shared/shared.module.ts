import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import 'hammerjs'
@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        AppRoutingModule,
      ],
      exports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
})

export class SharedModule {}