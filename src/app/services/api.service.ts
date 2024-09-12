import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Example: Fetch data from Firestore via your Express API
  getLeagues(): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues`);
  }

  // Example: Send data to Firestore via your Express API
  /*createTeam(team: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/teams`, team);
  }*/
}
