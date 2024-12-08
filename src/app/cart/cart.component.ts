import { Component } from '@angular/core';

import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems(); // Obtener productos del carrito
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index); // Eliminar del carrito
    this.cartItems = this.cartService.getCartItems(); // Actualizar la lista
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
