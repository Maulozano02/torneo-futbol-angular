import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TorneoListComponent } from './torneo-list/torneo-list.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ProximosPartidosComponent } from './proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TorneosComponent } from './torneos/torneos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TorneoListComponent, EquiposComponent, ProximosPartidosComponent, ResultadosComponent, TorneosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'torneo-futbol';
}
