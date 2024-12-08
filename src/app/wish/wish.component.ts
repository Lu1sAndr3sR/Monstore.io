import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de que CommonModule esté en el array de imports
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  wishListItems: any[] = [];  // Array para almacenar los productos de la lista de deseos

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Recuperar los productos de la lista de deseos cuando el componente se inicializa
    this.wishListItems = this.cartService.getWishListItems();
  }

  // Método para eliminar un producto de la lista de deseos
  removeFromWishList(index: number): void {
    this.cartService.removeFromWishList(index); // Llamamos al servicio para eliminar el producto
    this.wishListItems = this.cartService.getWishListItems(); // Actualizamos la lista de deseos
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
