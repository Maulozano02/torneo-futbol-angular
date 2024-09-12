import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importa el componente principal
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing'; // Importa las rutas
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()] // Proporciona las rutas a la aplicación
}).catch(err => console.error(err));
