import { Component } from '@angular/core';
import { AuthService } from '../../AuthService/auth.service';
import { GoogleMapsService } from '../../LocationService/google-maps.service'; // Chemin correct
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent {
  user = {
    username: '',
    email: '',
    password: '',
    progression: 0,
    se_diplome: false,
    se_bloque: false,
    type: '', // Peut être 'client' ou 'recruteur'
    localisation: '',
    interests: ['', '', ''], // Trois domaines d'intérêt pour les clients
  };
  isLoading = false; // Indicateur de chargement
  errorMessage = ''; // Message d'erreur
  showInterestForm = false; // Affiche le formulaire d'intérêt si localisation refusée

  constructor(
    private authService: AuthService,
    private googleMapsService: GoogleMapsService,
    private router: Router
  ) {}

  signup() {
    this.isLoading = true;
    this.errorMessage = '';

    // Vérifier si le type d'utilisateur est défini
    if (!this.user.type) {
      this.errorMessage = 'Veuillez sélectionner un type d\'utilisateur.';
      this.isLoading = false;
      return;
    }

    // Si l'utilisateur est un client, tenter de récupérer la localisation
    if (this.user.type === 'client') {
      this.googleMapsService.getAddressFromLocation()
        .then((location: string) => {
          this.user.localisation = location; // Localisation obtenue

          // Récupérer la latitude et la longitude
          return this.googleMapsService.getUserLocation();
        })
        .then(position => {
          const { latitude, longitude } = position.coords;

          // Inscrire l'utilisateur avec la localisation
          this.registerUser(latitude, longitude);
        })
        .catch((error) => {
          console.warn('Localisation refusée ou erreur', error);

          // Afficher le formulaire d'intérêt
          this.showInterestForm = true;
          this.isLoading = false;
        });
    } else if (this.user.type === 'recruteur') {
      // Si c'est un recruteur, aucune localisation n'est récupérée
      this.registerUser(); // Appel sans coordonnées
    }
  }

  submitInterestForm() {
    if (this.user.interests.some(interest => interest.trim() === '')) {
      this.errorMessage = 'Veuillez remplir les trois domaines d\'intérêt.';
      return;
    }

    // Inscrire l'utilisateur avec les informations manuelles
    this.registerUser();
  }

  private registerUser(latitude: number = 0, longitude: number = 0) {
    this.authService.signup(this.user, latitude, longitude).subscribe(
      (response) => {
        console.log('Utilisateur inscrit avec succès', response);

        // Redirection après l'inscription
        if (this.user.type === 'client') {
          this.router.navigate(['/user-dashboard']);
        } else if (this.user.type === 'recruteur') {
          this.router.navigate(['/recruteur-dashboard']);
        }
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
        this.errorMessage = 'Erreur lors de l\'inscription. Veuillez réessayer.';
        this.isLoading = false;
      },
      () => {
        this.isLoading = false; // Réinitialise l'indicateur de chargement
      }
    );
  }
}
