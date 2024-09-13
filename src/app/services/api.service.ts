import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Asegúrate de importar HttpHeaders aquí
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private weatherApiUrl = 'http://api.weatherapi.com/v1/current.json'; // Base URL for Weather API
  private weatherApiKey = 'dba322661bff41208e965213241309'; // Your Weather API Key

  constructor(private http: HttpClient) {}

  // Método para obtener el clima basado en coordenadas fijas
  getWeather(): Observable<any> {
    const lat = 25.6866; // Latitud de Monterrey
    const lon = -100.3161; // Longitud de Monterrey
    const url = `${this.weatherApiUrl}?key=${this.weatherApiKey}&q=${lat},${lon}&aqi=no`;
    return this.http.get(url);
  }

  // Fetch leagues
  getLeagues(): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues`);
  }

  // Fetch upcoming matches for a specific league
  getUpcomingMatches(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/matches/upcoming`);
  }

  // Fetch finished matches
  getFinishedMatches(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/matches/finished`);
  }

  // Fetch teams
  getTeams(leagueId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}leagues/${leagueId}/teams`);
  }

  // Method to post a league
  postLeague(body: any): Observable<any> {
    const url = `${this.apiUrl}leagues`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, body, { headers, responseType: 'text' as 'json' });
  }

  // Method to post a team
  postTeam(leagueId: string, body: any): Observable<any> {
    const url = `${this.apiUrl}leagues/${leagueId}/teams`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, body, { headers, responseType: 'text' as 'json' });
  }
}