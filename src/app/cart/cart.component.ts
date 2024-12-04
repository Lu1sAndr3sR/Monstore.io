import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para el pipe currency
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems(); // Obtener productos del carrito
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index); // Eliminar del carrito
    this.cartItems = this.cartService.getCartItems(); // Actualizar la lista
  }
}
