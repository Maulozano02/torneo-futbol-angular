import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  // Array estático con los resultados
  resultados = [
    { equipo1: 'Tomateros', equipo2: 'River', marcador: '2-0' },
    { equipo1: 'Leones', equipo2: 'Rayados', marcador: '3-2' }
  ];
}
