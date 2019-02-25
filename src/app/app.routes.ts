import { Routes , RouterModule} from "@angular/router";

import { PagesComponent } from "./pages/pages.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login/login.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { RegisterComponent } from "./login/register/register.component";



const appRoutes: Routes=[
   
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},

    { path: '**' ,component : NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});