import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {
    const toggleSidebar = document.getElementById('toggleSidebar'); // Icono del navbar para el toggle
    const sidebar = document.getElementById('sidebar'); // El sidebar
    const mainSection = document.getElementById('main-section'); // La sección principal

    if (toggleSidebar && sidebar && mainSection) {
      toggleSidebar.addEventListener('click', () => {
        // Alternar la clase 'minimized' en el sidebar
        sidebar.classList.toggle('minimized');

        // Si el sidebar tiene la clase 'minimized', ocultarlo completamente
        if (sidebar.classList.contains('minimized')) {
          sidebar.style.display = 'none'; // Sidebar oculto
          mainSection.style.width = '100%'; // Main section ocupa todo el ancho
        } else {
          sidebar.style.display = 'block'; // Sidebar visible
          mainSection.style.width = '80%'; // Main section vuelve al tamaño original
        }
      });
    }
  }
}
