import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponentComponent } from './Authentification/signin-component/signin-component.component';
import { SignupComponentComponent } from './Authentification/signup-component/signup-component.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { RecruteurDashboardComponent } from './recruteur/recruteur-dashboard/HomeRecruteur/recruteur-dashboard/recruteur-dashboard.component';
import { AjouterOffreComponent } from './recruteur/recruteur-dashboard/AjouterOffre/ajouter-offre/ajouter-offre.component';
import { ConsulterOffresComponent } from './recruteur/recruteur-dashboard/ConsulterOffres/consulter-offres/consulter-offres.component';
export  const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-dashboard', component: ClientDashboardComponent },
  { path: 'recruteur-dashboard', component: RecruteurDashboardComponent },
  { path: 'ajouter-offre', component: AjouterOffreComponent },
  { path: 'consulter-offres', component: ConsulterOffresComponent },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' },
];

/*Par exemple, lorsque l'utilisateur accède à la racine (/), le UserComponent sera affiché.
Si l'utilisateur navigue vers /admin, le AdminComponent sera affiché.*/