import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  products = [
    {id: 1, name: "Product A", price: 10.99, quantity: 0},
    {id: 2, name: "Product B", price: 7.99, quantity: 0},
    {id: 3, name: "Product C", price: 3.99, quantity: 0},
  ]
  sum = 0;

  onAddToCart(product: any){
    console.log("PARENT LIST PRODUCTS!");
    console.log(product);
    product.quantity++;
    this.sum += product.price;
    this.sum = Number(this.sum.toFixed(2));
  }

  onDeleteFromCart(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
      this.sum -= product.price;
      this.sum = Number(this.sum.toFixed(2));
    }
  }
}
