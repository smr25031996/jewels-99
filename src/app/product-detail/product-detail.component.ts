import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/model/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  name = "any"
  product: any;
  constructor(private route: ActivatedRoute, private data: ProductService) {
    this.route.params.subscribe(params => {
      this.name = params['name']; // Get the 'name' parameter from the route
      // You can now use the 'name' in your component as needed
      console.log(this.name);
    });
  }
  ngOnInit(): void {

    this.product = this.data.products.find((product) => product.name === this.name);
    console.log(this.product);
  }

  product_data: Product | undefined; // Replace with your product model


  addToCart(product: Product) {
    this.data.addToCart(product);
  }

}
