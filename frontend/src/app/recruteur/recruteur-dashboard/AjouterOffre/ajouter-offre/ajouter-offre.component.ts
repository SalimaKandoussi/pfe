import { Component } from '@angular/core';
import { RecruteurService } from '../../../RecruteurServices/recruteur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-offre',
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-offre.component.html',
  styleUrl: './ajouter-offre.component.css'
})
export class AjouterOffreComponent {
  regions: string[] = [
    'Tanger-Tétouan-Al Hoceïma',
    'L\'Oriental',
    'Fès-Meknès',
    'Rabat-Salé-Kénitra',
    'Béni Mellal-Khénifra',
    'Casablanca-Settat',
    'Marrakech-Safi',
    'Drâa-Tafilalet',
    'Souss-Massa',
    'Guelmim-Oued Noun',
    'Laâyoune-Sakia El Hamra',
    'Dakhla-Oued Ed-Dahab'
  ];
  offre = {
    region: '',
    ville: '',
    domaine: ''
  };
  constructor(private recruteurService: RecruteurService) {}
  ajouterOffre() {
    if (this.offre.region && this.offre.ville && this.offre.domaine) {
      this.recruteurService.ajouterOffre(this.offre).subscribe(
        (response) => {
          console.log('Offre ajoutée avec succès', response);
          alert('Offre ajoutée avec succès !');
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'offre', error);
          alert('Erreur lors de l\'ajout de l\'offre.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
