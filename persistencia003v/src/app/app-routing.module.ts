import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'segunda/:valorURL',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'tercera-detalle/:id',
    loadChildren: () => import('./tercera-detalle/tercera-detalle.module').then( m => m.TerceraDetallePageModule)
  },
  {
    path: 'cuarta',
    loadChildren: () => import('./cuarta/cuarta.module').then( m => m.CuartaPageModule)
  },
  {
    path: 'quinta',
    loadChildren: () => import('./quinta/quinta.module').then( m => m.QuintaPageModule)
  },
  {
    path: 'quinta/:id',
    loadChildren: () => import('./quinta/quinta.module').then( m => m.QuintaPageModule)
  },
  {
    path: 'quintalistado',
    loadChildren: () => import('./quintalistado/quintalistado.module').then( m => m.QuintalistadoPageModule)
  },
  {
    path: 'sexta',
    loadChildren: () => import('./sexta/sexta.module').then( m => m.SextaPageModule)
  },
  {
    path: 'sextapost/:id',
    loadChildren: () => import('./sextapost/sextapost.module').then( m => m.SextapostPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
