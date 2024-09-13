import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path to your ApiService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'] // Fix typo: styleUrl -> styleUrls
})
export class EquiposComponent implements OnInit {
  @Input() leagueId!: string; // Input decorator to receive leagueId from parent
  equipos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.leagueId) {
      this.getTeams(this.leagueId);
    }
  }

  getTeams(leagueId: string): void {
    this.apiService.getTeams(leagueId).subscribe(
      (data) => {
        this.equipos = data; // Populate equipos with API response
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }
}
