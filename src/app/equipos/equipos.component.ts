import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path to your ApiService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'] // Fix typo: styleUrl -> styleUrls
})
export class EquiposComponent implements OnChanges {
  @Input() leagueId!: string;
  equipos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['leagueId'] && this.leagueId) {
      this.getTeams(this.leagueId);
    }
  }

  getTeams(leagueId: string): void {
    this.apiService.getTeams(leagueId).subscribe(
      (data) => {
        this.equipos = data; // Assuming data is an array of teams
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }
}