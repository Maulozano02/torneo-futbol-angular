import { Component, Input } from '@angular/core';
import { EquiposComponent } from '../equipos/equipos.component';
import { ProximosPartidosComponent } from '../proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from '../resultados/resultados.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddTeamsComponent } from '../add-teams/add-teams.component';
import { ApiService } from '../services/api.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EquiposComponent, ProximosPartidosComponent, ResultadosComponent, RouterModule, AddTeamsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id!: string;
  name!: string;
  

  constructor(private route: ActivatedRoute, private leagueService: ApiService, private router: Router) {}

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
}
