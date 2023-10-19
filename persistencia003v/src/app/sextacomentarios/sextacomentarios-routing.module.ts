import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextacomentariosPage } from './sextacomentarios.page';

const routes: Routes = [
  {
    path: '',
    component: SextacomentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextacomentariosPageRoutingModule {}
