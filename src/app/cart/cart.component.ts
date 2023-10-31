import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from 'src/services/product.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any
  constructor(private cartService: ProductService) { }
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'total', 'action'];
  dataSource: any;




  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.dataSource = new MatTableDataSource(this.cartItems);
  }

  incrementQuantity(item: any) {
    // Implement increment logic
    item.quantity += 1;
  }

  decrementQuantity(item: any) {
    // Implement decrement logic
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: Product) {
    // Find the index of the item in the cartItems array
    const index = this.cartItems.findIndex((cartItem: Product) => cartItem === item);
  
    if (index !== -1) {
      // If the item is found in the cartItems array, remove it
      this.cartItems.splice(index, 1);
    }
  }

  getTotalPrice(item: Product): number {
    // Calculate the total price for an individual item
    return item.price * item.quantity;
    
  }
  calculateTotalPrice(): number {
    // Calculate the total cart price
    return this.cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0);
  }

  checkout() {
    // Implement checkout logic
    // You can navigate to a checkout page or process the order here
    console.log('Checkout button clicked');
  }

  buyMore() {
    // Implement buy more logic
    // You can navigate to a product listing page or continue shopping here
    console.log('Buy More button clicked');
  }




}
