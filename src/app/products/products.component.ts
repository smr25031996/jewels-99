import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [  {
    name: "Product 1",
    price: "19.99",
    rating: "★★★☆☆",
    image: "/assets/product1.jpg",
  },
  {
    name: "Product 2",
    price: "24.99",
    rating: "★★★☆☆",
    image: "/assets/product2.jpg",
  },
  {
    name: "Product 3",
    price: "14.95",
    rating: "★★★★☆",
    image: "/assets/product3.jpg",
  },
  {
    name: "Product 4",
    price: "29.99",
    rating: "★★★☆☆",
    image: "/assets/product4.jpg",
  },
  {
    name: "Product 5",
    price: "39.99",
    rating: "★★★☆☆",
    image: "/assets/product5.jpg",
  },
  {
    name: "Product 6",
    price: "49.99",
    rating: "★★★★☆",
    image: "/assets/product6.jpg",
  },
  {
    name: "Product 7",
    price: "22.95",
    rating: "★★★★☆",
    image: "/assets/product7.jpg",
  },
  {
    name: "Product 8",
    price: "15.99",
    rating: "★★★★☆",
    image: "/assets/product8.jpg",
  },
  {
    name: "Product 9",
    price: "34.99",
    rating: "★★★★☆",
    image: "/assets/product9.jpg",
  },
  {
    name: "Product 10",
    price: "25.99",
    rating: "★★★☆☆",
    image: "/assets/product10.jpg",
  },
  {
    name: "Product 11",
    price: "12.95",
    rating: "★★★★★",
    image: "/assets/product11.jpg",
  },
  {
    name: "Product 12",
    price: "19.99",
    rating: "★★★☆☆",
    image: "/assets/product12.jpg",
  },
  {
    name: "Product 13",
    price: "14.95",
    rating: "★★★★☆",
    image: "/assets/product13.jpg",
  },
  {
    name: "Product 14",
    price: "29.99",
    rating: "★★★☆☆",
    image: "/assets/product14.jpg",
  },
  {
    name: "Product 15",
    price: "39.99",
    rating: "★★★★☆",
    image: "/assets/product15.jpg",
  },
  {
    name: "Product 16",
    price: "49.99",
    rating: "★★★★☆",
    image: "/assets/product16.jpg",
  },
  {
    name: "Product 17",
    price: "22.95",
    rating: "★★★★☆",
    image: "/assets/product17.jpg",
  },
  {
    name: "Product 18",
    price: " 15.99",
    rating: "★★★★☆",
    image: "/assets/product18.jpg",
  },
  {
    name: "Product 19",
    price: "34.99",
    rating: "★★★★☆",
    image: "/assets/product19.jpg",
  },
  {
    name: "Product 20",
    price: "25.99",
    rating: "★★★☆☆",
    image: "/assets/product20.jpg",
  }]; // Your product data here

  constructor() { }

  ngOnInit(): void {
  }

}
