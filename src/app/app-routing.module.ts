import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'taquin',
    loadChildren: () => import('./modules/taquin/taquin.module')
      .then(mod => mod.TaquinModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/taquin/taquin.module')
      .then(mod => mod.TaquinModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
