import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proximos-partidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent {

  proximosPartidos = [
    {
      equipo1: 'Leones',
      equipo2: 'Tomateros',
      fecha: '11 Septiembre',
      hora: '5 PM'
    },
    {
      equipo1: 'Pumas',
      equipo2: 'Tigres',
      fecha: '11 Septiembre',
      hora: '7 PM'
    }
  ];

}
