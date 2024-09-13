import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importa el componente principal
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing'; // Importa las rutas
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"semanatec-682d1","appId":"1:754258830160:web:6d2b49316d947632130255","databaseURL":"https://semanatec-682d1-default-rtdb.firebaseio.com","storageBucket":"semanatec-682d1.appspot.com","apiKey":"AIzaSyD_wMl-1vAnu6tgc6nBtFNDapCx9jsymMA","authDomain":"semanatec-682d1.firebaseapp.com","messagingSenderId":"754258830160"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())] // Proporciona las rutas a la aplicación
}).catch(err => console.error(err));
