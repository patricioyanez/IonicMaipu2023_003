import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// 1-. npm install @ionic/storage-angular
// 2.- agregar import
import { IonicStorageModule } from '@ionic/storage-angular';
// 3.- agregar en @ngModule. imports: , IonicStorageModule.forRoot()

// 1.- permite realizar solicitudes a un servidor
import { HttpClientModule, HttpClient} from '@angular/common/http';
// 2.- agregar al import y proveedor

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [HttpClient, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
