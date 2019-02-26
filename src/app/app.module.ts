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

import { FormsModule } from '@angular/forms';


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
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
