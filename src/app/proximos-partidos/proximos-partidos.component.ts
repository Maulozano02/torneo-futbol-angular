import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-proximos-partidos',
  standalone: true,  // Especifica que este componente es standalone
  imports: [CommonModule],  // Importa CommonModule para usar *ngIf, *ngFor, y pipes como 'date'
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent implements OnChanges {
  @Input() leagueId!: string;
  upcomingMatches: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['leagueId'] && this.leagueId) {
      this.getUpcomingMatches(this.leagueId);
    }
  }

  getUpcomingMatches(leagueId: string): void {
    this.apiService.getUpcomingMatches(leagueId).subscribe(
      (data) => {
        this.upcomingMatches = data;
      },
      (error) => {
        console.error('Error fetching upcoming matches:', error);
      }
    );
  }
}
