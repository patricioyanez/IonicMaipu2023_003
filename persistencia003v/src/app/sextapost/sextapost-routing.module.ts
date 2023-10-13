import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextapostPage } from './sextapost.page';

const routes: Routes = [
  {
    path: '',
    component: SextapostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextapostPageRoutingModule {}
