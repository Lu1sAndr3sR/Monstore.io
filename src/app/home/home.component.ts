import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Inyectar el servicio Router para manejar las redirecciones.
  constructor(private router: Router) {}

  // Método para manejar el log-out
  logout() {
    // Lógica para cerrar sesión, puede ser eliminar tokens o limpiar el almacenamiento.
    localStorage.removeItem('userToken');
    this.router.navigate(['/landing']); // Redirigir al landing page
  }
}
