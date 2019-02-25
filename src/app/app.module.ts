import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTES } from './app.routes';
//Modulos
import { PagesModele } from './pages/pages.module';




//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModele,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
