import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TorneosComponent } from './torneos/torneos.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'home/:id/:name', component: HomeComponent }, // Ruta a HomeComponent
  {path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'torneos', component: TorneosComponent }, // Ruta a TorneosComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirección a Home
];
