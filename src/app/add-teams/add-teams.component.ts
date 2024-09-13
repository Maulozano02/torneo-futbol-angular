import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent {
  @Input() leagueId!: string;  // Get leagueId as input from the parent component
  teamName: string = '';      // Model for the team name input
  isVisible: boolean = false; // Controls visibility of the popup

  constructor(private apiService: ApiService) {}

  // Opens the popup
  openPopup(): void {
    this.isVisible = true;
  }

  // Closes the popup
  closePopup(): void {
    this.isVisible = false;
  }

  // Submits the team data
  submitTeam(): void {
    const body = { name: this.teamName };
    this.apiService.postTeam(this.leagueId, body).subscribe(
      (response) => {
        console.log('Team added successfully:', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error adding team:', error);
      }
    );
  }
}
