import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextacomentariosPageRoutingModule } from './sextacomentarios-routing.module';

import { SextacomentariosPage } from './sextacomentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextacomentariosPageRoutingModule
  ],
  declarations: [SextacomentariosPage]
})
export class SextacomentariosPageModule {}
