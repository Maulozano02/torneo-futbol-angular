import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TorneoListComponent } from './torneo-list/torneo-list.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ProximosPartidosComponent } from './proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TorneosComponent } from './torneos/torneos.component';
import { LeagueComponent } from './league/league.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // For datepicker


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TorneoListComponent, EquiposComponent, ProximosPartidosComponent, ResultadosComponent, TorneosComponent, LeagueComponent,CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'torneo-futbol';
  constructor(public router: Router) {} 
}
