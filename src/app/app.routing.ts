import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

import { MainComponent } from './modules/main/main.component';
import {RegisterComponent} from "./components/register/register.component";

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'main' }
];

export const routing = RouterModule.forRoot(appRoutes);
