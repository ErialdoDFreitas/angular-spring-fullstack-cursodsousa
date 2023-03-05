import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    CursoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
