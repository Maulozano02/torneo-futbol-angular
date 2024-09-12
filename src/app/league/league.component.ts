import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-league',
  standalone: true,
  imports: [CommonModule], // You can add CommonModule here if needed
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  leagues$?: Observable<any[]>; // Use an array type if the API returns an array of leagues

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.leagues$ = this.apiService.getLeagues();
  }
}
