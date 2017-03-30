import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { MainComponent } from './main.component';
import { FormsModule } from "@angular/forms";
import { MainRoutes } from "./main.routing";
import { AppealsComponent } from './components/appeals/appeals.component';
import {NotyComponent} from "./_assets/noty/noty.component";

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
    NotyComponent
  ]
})
export class MainModule { }
