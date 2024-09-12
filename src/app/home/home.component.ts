import { Component } from '@angular/core';
import { EquiposComponent } from '../equipos/equipos.component';
import { ProximosPartidosComponent } from '../proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EquiposComponent, ProximosPartidosComponent, ResultadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
