import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-proximos-partidos',
  standalone: true,  // Especifica que este componente es standalone
  imports: [CommonModule],  // Importa CommonModule para usar *ngIf, *ngFor, y pipes como 'date'
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent implements OnInit {
  @Input() leagueId!: string;
  upcomingMatches: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUpcomingMatches();
  }

  loadUpcomingMatches(): void {
    if (this.leagueId) {
      this.apiService.getUpcomingMatches(this.leagueId).subscribe({
        next: (matches) => {
          this.upcomingMatches = matches;
        },
        error: (error) => {
          console.error('Error fetching upcoming matches:', error);
        }
      });
    }
  }
}
