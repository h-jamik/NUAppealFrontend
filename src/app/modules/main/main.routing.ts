
import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {AuthGuard} from "../../_guards/auth.guard";
import {AppealsComponent} from "./components/appeals/appeals.component";
import {NewAppealComponent} from "./components/new-appeal/new-appeal.component";
import {UsersComponent} from "./components/users/users.component";
import {CarsComponent} from "./components/cars/cars.component";


const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        component: AppealsComponent
      },
      {
        path: 'new-appeal',
        component: NewAppealComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      }
    ]
  },
];

@NgModule ({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutes {}
