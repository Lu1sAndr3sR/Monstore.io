import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []; // Lista de productos en el carrito
  private wishListItems: any[] = []; // Lista de productos en la lista de deseos

  // Obtener productos del carrito
  getCartItems() {
    return this.cartItems;
  }

  // Agregar un producto al carrito
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // Eliminar un producto del carrito
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Obtener productos de la lista de deseos
  getWishListItems() {
    return this.wishListItems;
  }

  // Agregar un producto a la lista de deseos
  addToWishList(product: any) {
    this.wishListItems.push(product);
  }

  // Eliminar un producto de la lista de deseos
  removeFromWishList(index: number) {
    this.wishListItems.splice(index, 1);
  }
}
