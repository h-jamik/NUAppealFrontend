import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { MainComponent } from './main.component';
import { FormsModule } from "@angular/forms";
import { MainRoutes } from "./main.routing";
import { AppealsComponent } from './components/appeals/appeals.component';
import {NotyComponent} from "./_assets/noty/noty.component";
import { NewAppealComponent } from './components/new-appeal/new-appeal.component';
import {CarMaskDirective, UserIdMaskDirective} from "./_directives/mask.directive";
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';

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
    CarMaskDirective,
    UserIdMaskDirective,
    UsersComponent,
    CarsComponent
  ]
})
export class MainModule { }
