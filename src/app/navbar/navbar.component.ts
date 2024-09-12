import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Asegúrate de que esté en plural
})
export class NavbarComponent  {
  ngAfterViewInit() {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    if (toggleSidebar && sidebar) {
      toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('minimized');
      });
    }
  }

}
