import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./estilos.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
  providers: [FirebaseAuthService] // Add this line
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; 
  successMessage: string = ''; 

  constructor(
    private router: Router,
    private firebaseAuthService: FirebaseAuthService 
  ) { }
  
  signUp() {
    this.firebaseAuthService.signUp(this.email, this.password)
      .then((userCredential) => {
        const userData = {
          uid: userCredential.user?.uid,
          email: userCredential.user?.email,
          password: this.password, 
          createdAt: new Date()
        };

        return this.firebaseAuthService.addDataToFirestore('Usuarios', userData);
      })
      .then(() => {
        this.successMessage = 'You have signed up successfully! Redirecting to login...'; 
        this.errorMessage = ''; 
        console.log(this.successMessage); 

        setTimeout(() => this.router.navigate(['/login']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = ''; 
        console.error('Sign-up error:', error.message);
      });
  }

  // Method for Google Sign-In
  googleSignIn() {
    this.firebaseAuthService.signInWithGoogle()
      .then((userCredential) => {
        const userData = {
          uid: userCredential.user?.uid,
          email: userCredential.user?.email,
        };
  
       
        return this.firebaseAuthService.addDataToFirestore('Usuarios', userData);
      })
      .then(() => {
        this.successMessage = 'You have signed in with Google successfully! Redirecting to login...';
        this.errorMessage = '';
        console.log(this.successMessage);
  
        // Redirigir a la página de inicio de sesión después de un inicio de sesión exitoso
        setTimeout(() => this.router.navigate(['/login']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = '';
        console.error('Google Sign-in error:', error.message);
      });
  }
  

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
