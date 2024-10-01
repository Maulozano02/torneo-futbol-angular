import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TorneoListComponent } from './torneo-list/torneo-list.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ProximosPartidosComponent } from './proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TorneosComponent } from './torneos/torneos.component';
import { LeagueComponent } from './league/league.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // For datepicker
import { ApiService } from './api.service';  // Import the API service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TorneoListComponent,
    EquiposComponent,
    ProximosPartidosComponent,
    ResultadosComponent,
    TorneosComponent,
    LeagueComponent,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'torneo-futbol';

  constructor(public router: Router, private apiService: ApiService) {}  // Inject the service

  ngOnInit(): void {
    this.apiService.getSomeData().subscribe(data => {
      console.log(data);  // Handle the API response here
      // You can use this data in your template or for further processing
    });
  }
}
