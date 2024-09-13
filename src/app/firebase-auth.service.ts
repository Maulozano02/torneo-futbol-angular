import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  signUp(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable(subscriber => {
      this.auth.onAuthStateChanged(user => subscriber.next(user));
    });
  }

  addDataToFirestore(collectionName: string, data: any): Promise<any> {
    const collRef = collection(this.firestore, collectionName);
    return addDoc(collRef, data);
  }

  signInWithGoogle(): Promise<any> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
}