import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


/*Ce composant (UserComponent) représente une partie de l'interface utilisateur de l'application. 
 Il sera utilisé comme le composant racine (principal) à afficher dans le navigateur.
 c'est le premier composant qui sera affiché dans le navigateur*/
import { AppComponent } from './app/app.component';


//La fonction bootstrapApplication est utilisée pour démarrer l'application.Elle prend deux arguments ;
//AppComponent : Le composant principal qui sera rendu au démarrage de l'application et
//appConfig : Les paramètres de configuration définis dans le fichier app.config.ts
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
