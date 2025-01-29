import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private backendUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir la position de l'utilisateur
  getUserLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        reject('Geolocation not supported by browser');
      }
    });
  }

  // Méthode pour récupérer l'adresse sous forme de chaîne de caractères
  async getAddressFromLocation(): Promise<string> {
    try {
      const position = await this.getUserLocation();
      const { latitude, longitude } = position.coords;
      
      // Retourner les coordonnées sous forme de chaîne
      return `${latitude},${longitude}`;
    } catch (error) {
      console.error('Error getting address from location', error);
      throw error;
    }
  }
}
