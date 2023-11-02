import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products
    // console.log(JSON.stringify(this.products))
    console.log(this.productService.getProducts())

// this.productService.getProducts().subscribe(resp=>{
//   console.log(resp);
//    this.products=resp;
  
// })

  }


}
