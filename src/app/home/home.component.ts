import { Component, Input } from '@angular/core';
import { EquiposComponent } from '../equipos/equipos.component';
import { ProximosPartidosComponent } from '../proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from '../resultados/resultados.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddTeamsComponent } from '../add-teams/add-teams.component';
import { ApiService } from '../services/api.service'; 
import { MatDialog } from '@angular/material/dialog';
import { CreateMatchComponent } from '../create-match/create-match.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EquiposComponent, ProximosPartidosComponent, ResultadosComponent, RouterModule, AddTeamsComponent, CreateMatchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id!: string;
  name!: string;
  

  constructor(private route: ActivatedRoute, private leagueService: ApiService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Subscribe to changes in route parameters
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.name = params.get('name') || '';
    });
  }
  deleteLeague(): void {
    this.leagueService.deleteLeague(this.id, {}).subscribe({
      next: () => {
        alert('League deleted successfully');
        this.router.navigate(['/torneos']);
        window.location.reload(); 
      },
      error: (err) => {
        console.error('Error deleting league', err);
      }
    });
  }
openCreateMatchDialog(): void {
  console.log('Opening CreateMatch dialog with leagueId:', this.id);
  const dialogRef = this.dialog.open(CreateMatchComponent, {
    width: '400px',
    data: { leagueId: this.id }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
