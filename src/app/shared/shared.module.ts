import { NgModule } from "@angular/core";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

//rutas
import { PAGES_ROUTES } from "../pages/pages.routes";




@NgModule({

    declarations:[
      BreadcrumsComponent,
      HeaderComponent,
      SidebarComponent,
      NopagefoundComponent      
      ],
  
      exports:[
     BreadcrumsComponent,
     HeaderComponent,
     SidebarComponent,
     NopagefoundComponent
    ],

    imports: [PAGES_ROUTES],
})

export class sharedModule {}