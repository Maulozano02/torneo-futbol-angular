import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Ajusta la ruta según corresponda
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-torneos',
  standalone: true,
  imports: [FormsModule], // Asegúrate de que FormsModule está importado
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
        
        // Mostrar alerta de éxito al crear el torneo correctamente
        alert('¡Torneo creado satisfactoriamente!');
        
        // Opcional: Resetear el formulario después de crear el torneo
        this.resetForm();
        window.location.reload();
      },
      (error) => {
        console.error('Error adding league:', error);
        
        // Mostrar un mensaje de error si ocurre algún problema
        alert('Ocurrió un error al crear el torneo. Intenta nuevamente.');
      }
    );
  }

  // Método para resetear el formulario después de la creación exitosa
  resetForm(): void {
    this.league = {
      name: '',
      startDate: '',
      endDate: '',
      description: '',
      teamsNumber: null
    };
  }
}
