import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { sharedModule } from "../shared/shared.module";

//rutas hijas
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";




@NgModule({
    declarations:[

      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      IncrementadorComponent
    ],

    exports:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      IncrementadorComponent

    ],
    imports:[
      sharedModule,
      PAGES_ROUTES,
      FormsModule
  ]


})

export class PagesModele { }