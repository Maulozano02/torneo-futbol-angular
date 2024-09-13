import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-match',
  standalone: true,
  templateUrl: './create-match.component.html',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule
  ],
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {
  leagueId!: string;
  teams: any[] = [];
  matchForm = {
    team1: '',
    team2: '',
    startDate: '',
    place: ''
  };

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CreateMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { leagueId: string } // Inject dialog data
  ) {}

  ngOnInit(): void {
    console.log('Received leagueId:', this.data.leagueId); // Debugging statement
    this.loadTeams();
  }

  loadTeams(): void {
    if (!this.data.leagueId) {
      console.error('No leagueId provided');
      return;
    }

    this.apiService.getTeams(this.data.leagueId).subscribe(
      (data: any[]) => {
        this.teams = data.map(team => ({
          _id: team.id,
          name: team.name
        }));
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  onSubmit(): void {
    const matchData = {
      teams: [this.matchForm.team1, this.matchForm.team2],
      startDate: new Date(this.matchForm.startDate).toISOString(), // Ensure this is a valid ISO string
      place: this.matchForm.place,
    };

    this.apiService.postMatch(this.data.leagueId, matchData).subscribe(
      (response) => {
        console.log('Match created successfully:', response);
        this.dialogRef.close(); // Close the modal
        window.location.reload();
      },
      (error) => {
        console.error('Error creating match:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the modal on cancel
  }
}