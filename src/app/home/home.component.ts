import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de incluir FormsModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Lista de productos
  products = [
    {
      name: 'Malzeno Figure Max',
      category: 'Figure',
      color: 'Black',
      price: 100,
      image: '/assets/malzenoF.png',
    },
    {
      name: 'Glaveneous Figure Max',
      category: 'Figure',
      color: 'Red',
      price: 150,
      image: '/assets/glaveneousF.png',
    },
    {
      name: 'Rathalos Plushie',
      category: 'Plush',
      color: 'Red',
      price: 150,
      image: '/assets/rathalosP.png',
    },
    {
      name: 'Felyne Funko-Pop',
      category: 'Funko',
      color: 'Brown',
      price: 150,
      image: '/assets/felyneFk.png',
    },
    {
      name: 'Palamute Plushie',
      category: 'Plush',
      color: 'Blue',
      price: 150,
      image: '/assets/palamuteP.png',
    },
    {
      name: 'Fatalis Figure Max',
      category: 'Figure',
      color: 'Black',
      price: 150,
      image: '/assets/fatalisF.png',
    },
    {
      name: 'Monster Hunter/Hunter Funko-Pop',
      category: 'Funko',
      color: 'Green',
      price: 100,
      image: '/assets/hunterFk.png',
    },
    {
      name: 'Felyne Plushie/Keychan',
      category: 'Plush',
      color: 'Brown',
      price: 150,
      image: '/assets/felyneP.png',
    },
    {
      name: 'Zinogre Funko-Pop',
      category: 'Funko',
      color: 'Blue',
      price: 150,
      image: '/assets/zinogreFk.png',
    },
    {
      name: 'Dodogama Plushie',
      category: 'Plush',
      color: 'Blue',
      price: 150,
      image: '/assets/dodogamaP.png',
    },
    {
      name: 'Rathalos Figure Max',
      category: 'Figure',
      color: 'Red',
      price: 150,
      image: '/assets/rathalosF.png',
    },
    {
      name: 'Barioth Funko-Pop',
      category: 'Funko',
      color: 'White',
      price: 150,
      image: '/assets/bariothFk.png',
    },
    {
      name: 'Monster Hunter Stories Funko-Pop',
      category: 'Funko',
      color: 'Blue',
      price: 150,
      image: '/assets/storyFk.png',
    },
    {
      name: 'Glaveneous Plushie',
      category: 'Plush',
      color: 'Black',
      price: 150,
      image: '/assets/glaveneousP.png',
    },
    {
      name: 'Gore-Mághala Cube Builder Figure',
      category: 'Figure',
      color: 'Black',
      price: 150,
      image: '/assets/goremagalaF.png',
    },
    {
      name: 'Rathalos Funko-Pop',
      category: 'Funko',
      color: 'Red',
      price: 150,
      image: '/assets/rathalosFk.png',
    },
    {
      name: 'Namielle Plushie',
      category: 'Plush',
      color: 'Blue',
      price: 150,
      image: '/assets/namielleP.png',
    },
    {
      name: 'Mizutsune Cube Builder Figure',
      category: 'Figure',
      color: 'Pink',
      price: 150,
      image: '/assets/mizutsuneF.png',
    },
    {
      name: 'Nergigante Plushie',
      category: 'Plush',
      color: 'Black',
      price: 150,
      image: '/assets/nergiganteP.png',
    },
    {
      name: 'Nargacuga Tamashii Monsters S.A.',
      category: 'Figure',
      color: 'Black',
      price: 150,
      image: '/assets/nargacugaF.png',
    },
  ];

  // Definir las variables necesarias para el componente
  searchText: string = '';  // Variable que se usará para la búsqueda

  constructor(private router: Router, private cartService: CartService) {}

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/landing']);
  }

  // Método para agregar un producto al carrito
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Producto agregado al carrito:', product);
  }

  // Método para agregar un producto a la lista de deseos
  addToWishList(product: any) {
    this.cartService.addToWishList(product);
    console.log('Producto agregado a la lista de deseos:', product);
  }

  // Método para realizar la búsqueda de productos
  searchProducts() {
    console.log('Buscar:', this.searchText);
    // Aquí puedes filtrar productos o redirigir a otro componente.
  }

  goToWishList() {
    this.router.navigate(['wish']);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }
}
