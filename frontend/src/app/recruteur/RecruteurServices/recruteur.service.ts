import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';  // Pour gérer les erreurs

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  private baseUrl = 'http://localhost:8080/api/offres';  // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter une nouvelle offre d'emploi
  ajouterOffre(offre: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouter`, offre).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'ajout de l\'offre', error);
        throw error;  // Rethrow the error for further handling if needed
      })
    );
  }

  // Méthode pour récupérer toutes les offres d'emploi
  consulterOffres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/consulter`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des offres', error);
        throw error;  // Rethrow the error
      })
    );
  }
}
