import { NgModule } from "@angular/core";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";




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
})

export class sharedModule {}