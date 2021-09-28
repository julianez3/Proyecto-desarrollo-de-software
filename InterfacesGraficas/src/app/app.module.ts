import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstadoVentasComponent } from './ventas/estado-ventas/estado-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoVentasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
