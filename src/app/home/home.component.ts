import { Component, Input } from '@angular/core';
import { EquiposComponent } from '../equipos/equipos.component';
import { ProximosPartidosComponent } from '../proximos-partidos/proximos-partidos.component';
import { ResultadosComponent } from '../resultados/resultados.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EquiposComponent, ProximosPartidosComponent, ResultadosComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id!: string;
  name!: string;
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to changes in route parameters
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.name = params.get('name') || '';
    });
  }
}
