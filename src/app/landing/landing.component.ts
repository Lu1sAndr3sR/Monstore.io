import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // Corregido aquí
})
export class LandingComponent {

}
