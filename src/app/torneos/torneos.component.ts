import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust path to your ApiService
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-torneos',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent {
  league = {
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    teamsNumber: null
  };

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    const body = {
      name: this.league.name,
      startDate: this.league.startDate,
      endDate: this.league.endDate,
      description: this.league.description,
      maxTeams: this.league.teamsNumber
    };

    this.apiService.postLeague(body).subscribe(
      (response) => {
        console.log('League added successfully:', response);
        // Optionally, reset the form or show a success message
      },
      (error) => {
        console.error('Error adding league:', error);
        // Optionally, show an error message
      }
    );
  }
}
