import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { MainComponent } from './main.component';
import { FormsModule } from "@angular/forms";
import { MainRoutes } from "./main.routing";
import { AppealsComponent } from './components/appeals/appeals.component';
import {NotyComponent} from "./_assets/noty/noty.component";
import { NewAppealComponent } from './components/new-appeal/new-appeal.component';
import {CarMaskDirective} from "./_directives/mask.directive";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MainRoutes
  ],
  declarations: [
    MainComponent,
    AppealsComponent,
    NotyComponent,
    NewAppealComponent,
    CarMaskDirective
  ]
})
export class MainModule { }
