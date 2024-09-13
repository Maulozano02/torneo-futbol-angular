import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TorneosComponent } from './torneos/torneos.component';

export const routes: Routes = [
  { path: 'home/:id/:name', component: HomeComponent }, // Ruta a HomeComponent
  { path: 'torneos', component: TorneosComponent }, // Ruta a TorneosComponent
  { path: '', redirectTo: '/torneos', pathMatch: 'full' } // Redirección a Home
];
