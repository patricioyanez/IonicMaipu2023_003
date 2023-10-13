import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextapostPageRoutingModule } from './sextapost-routing.module';

import { SextapostPage } from './sextapost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextapostPageRoutingModule
  ],
  declarations: [SextapostPage]
})
export class SextapostPageModule {}
