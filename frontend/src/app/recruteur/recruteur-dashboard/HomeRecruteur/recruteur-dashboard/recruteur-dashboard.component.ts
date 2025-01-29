import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruteur-dashboard',
  imports: [],
  templateUrl: './recruteur-dashboard.component.html',
  styleUrl: './recruteur-dashboard.component.css'
})
export class RecruteurDashboardComponent {

  constructor(private router: Router) {}
  navigateToAjouterOffre() {
    this.router.navigate(['/ajouter-offre']); // Change l'URL selon ta configuration de routes
  }

  navigateToConsulterOffres() {
    this.router.navigate(['/consulter-offres']); // Change l'URL selon ta configuration de routes
  }
}
