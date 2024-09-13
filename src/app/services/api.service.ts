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

  // Fetch upcoming matches for a specific league
  getUpcomingMatches(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/matches/upcoming`);
  }

  getFinishedMatches(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/matches/finished`);
  }

  getTeams(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/teams`);
  }
}
