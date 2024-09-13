import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust path to your ApiService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnChanges {
  @Input() leagueId!: string; // Input decorator to receive leagueId from parent
  finishedMatches: any[] = [];

  constructor(private apiService: ApiService) {}

  // React to changes in the leagueId input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['leagueId'] && this.leagueId) {
      this.getFinishedMatches(this.leagueId);
    }
  }

  getFinishedMatches(leagueId: string): void {
    this.apiService.getFinishedMatches(leagueId).subscribe(
      (data) => {
        this.finishedMatches = data; // Assuming the API returns an array of matches
      },
      (error) => {
        console.error('Error fetching finished matches:', error);
      }
    );
  }
}

