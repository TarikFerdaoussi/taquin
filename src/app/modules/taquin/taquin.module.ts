import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaquinRoutingModule } from './taquin-routing.module';
import { TaquinGridComponent } from './taquin-grid/taquin-grid.component';
import { TaquinWinComponent } from './taquin-win/taquin-win.component';


@NgModule({
  declarations: [TaquinGridComponent, TaquinWinComponent],
  imports: [
    CommonModule,
    TaquinRoutingModule
  ]
})
export class TaquinModule { }
