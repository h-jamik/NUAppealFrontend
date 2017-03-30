
import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {AuthGuard} from "../../_guards/auth.guard";
import {AppealsComponent} from "./components/appeals/appeals.component";


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
