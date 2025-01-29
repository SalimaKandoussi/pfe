import { Component, OnInit } from '@angular/core';
import { RecruteurService } from '../../../RecruteurServices/recruteur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulter-offres',
  imports: [CommonModule, FormsModule],
  templateUrl: './consulter-offres.component.html',
  styleUrl: './consulter-offres.component.css'
})
export class ConsulterOffresComponent implements OnInit{

  offres: any[] = [];
  constructor(private recruteurService: RecruteurService) {}
  ngOnInit(): void {
    this.recruteurService.consulterOffres().subscribe(
      data => {
        this.offres = data;
      },
      error => {
        console.error('Erreur lors de la récupération des offres', error);
      }
    );
  }
}


/*ngOnInit est le bon endroit pour appeler des services ou effectuer des actions nécessaires avant que le composant ne soit affiché.
Cela garantit que le composant est prêt pour afficher les données récupérées.*/