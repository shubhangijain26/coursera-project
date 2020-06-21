import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
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
      ],
      exports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
      ],
})

export class SharedModule {}