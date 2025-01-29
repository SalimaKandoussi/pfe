import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignupComponentComponent } from '../Authentification/signup-component/signup-component.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive,RouterOutlet,SignupComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
