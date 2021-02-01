import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaquinGridComponent } from './taquin-grid/taquin-grid.component';
import { TaquinWinComponent } from './taquin-win/taquin-win.component';

const routes: Routes = [
  { path: '', component: TaquinGridComponent },
  { path: 'win/:moves', component:  TaquinWinComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaquinRoutingModule {  }
