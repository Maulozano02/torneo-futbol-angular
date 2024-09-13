import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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

   // Method to post a team
   postLeague(body: any): Observable<any> {
    const url = `${this.apiUrl}leagues`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate headers for your API
    });

    return this.http.post(url, body, { headers, responseType: 'text' as 'json' });
  }
  postTeam(leagueId: string, body: any): Observable<any> { 
    const url = `${this.apiUrl}leagues/${leagueId}/teams`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate headers for your API
    });

    return this.http.post(url, body, { headers, responseType: 'text' as 'json' });
  }
}
