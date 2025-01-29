import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  signup(user: any, latitude: number, longitude: number): Observable<any> {
    const payload = { user, latitude, longitude }; // Ajoutez latitude et longitude
    return this.http.post(`${this.apiUrl}/signup`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  signin(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

}
