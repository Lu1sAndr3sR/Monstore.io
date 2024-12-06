import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private location: Location, private router: Router) { }

  // Método para manejar la redirección después de hacer clic en "SAVE"
  redirectToLogin() {
    // Verificamos si la página anterior fue log-in o no
    const previousUrl = localStorage.getItem('previousUrl');

    if (previousUrl && previousUrl.includes('/log-in')) {
      this.router.navigate(['/log-in']);  // Regresa a log-in si venía de ahí
    } else {
      this.router.navigate(['/landing']); // Si no, redirige a landing
    }
  }

  // Método para manejar el retroceso (back)
  goBack() {
    // Guardar la URL actual en localStorage antes de redirigir
    localStorage.setItem('previousUrl', window.location.href);
    
    // Realiza la acción de retroceso
    this.location.back();
  }
}
