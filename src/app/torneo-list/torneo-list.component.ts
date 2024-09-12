import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-torneo-list',
  standalone: true,
  templateUrl: './torneo-list.component.html',
  styleUrls: ['./torneo-list.component.css']
})
export class TorneoListComponent {
  @Output() componentSelected = new EventEmitter<string>();  // Emite el evento cuando se selecciona un componente

  selectComponent(component: string) {
    this.componentSelected.emit(component);  // Emite el nombre del componente seleccionado
  }
}
