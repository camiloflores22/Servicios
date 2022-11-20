import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//agregar http cliente
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './servicios/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './component/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
