import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = ''; 

  constructor(
    private router: Router,
    private firebaseAuthService: FirebaseAuthService
  ) { }

  login() {
    this.firebaseAuthService.login(this.email, this.password)
      .then(() => {
        this.successMessage = 'You have logged in successfully! Redirecting...';
        this.errorMessage = '';
        console.log(this.successMessage);

        setTimeout(() => this.router.navigate(['torneos']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = '';
        console.error('Login error:', error);
      });
  }

  googleSignIn() {
    this.firebaseAuthService.signInWithGoogle()
      .then(() => {
        this.successMessage = 'You have logged in with Google successfully! Redirecting...';
        this.errorMessage = '';
        console.log(this.successMessage);

        
        setTimeout(() => this.router.navigate(['torneos']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = '';
        console.error('Google Sign-in error:', error.message);
      });
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
