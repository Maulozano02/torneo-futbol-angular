import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-proximos-partidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent implements OnInit {
  @Input() leagueId!: string;
  upcomingMatches: any[] = [];
  weather: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getWeather(); // Obtener el clima al iniciar el componente
  }

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

  getWeather(): void {
    this.apiService.getWeather().subscribe(
      (weatherData) => {
        this.weather = weatherData.current;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}