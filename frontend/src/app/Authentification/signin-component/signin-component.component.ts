import { Component } from '@angular/core';
import { AuthService } from '../../AuthService/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './signin-component.component.html',
  styleUrls: ['./signin-component.component.css']
})
export class SigninComponentComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signin() {
    this.authService.signin(this.credentials).subscribe(
      (response) => {
        console.log('Utilisateur connecté avec succès', response);

        // Vérifie le type utilisateur
        if (response.type === 'admin') {
          // Redirige vers l'interface admin
          this.router.navigate(['/admin-dashboard']);
        } else if (response.type === 'client'){
          // Redirige vers l'interface utilisateur normal
          this.router.navigate(['/user-dashboard']);
        }else{
          this.router.navigate(['/recruteur-dashboard']);
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }
}
