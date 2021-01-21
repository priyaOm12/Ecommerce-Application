import { Component, OnInit, DoCheck } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, DoCheck {

  productsList: IProduct[] = [];
  productItemDetail: IProduct;
  quantityCountValue: number = 1;
  quantityCount: number = 1;
  id: number
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.fetchProduct(this.id);
    });

  }
  ngDoCheck() {
    this.quantityCountValue;
  }
  fetchProduct(selectedId: number) {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.productsList = data
      for (let product of this.productsList) {
        if (product.productId === selectedId) {
          this.productItemDetail = product;
        }
      }
    },
      error => console.log(error));
  }
  addToCart(productItem: IProduct, quantityCount: number) {
    this.cartService.addToCart(productItem, quantityCount);
  }
  decreaseQuantity() {
    this.quantityCountValue = this.quantityCountValue - 1;

  }
  increaseQuantity() {
    this.quantityCountValue = this.quantityCountValue + 1;
  }
}
