import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/IProduct';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductFilterPipe } from 'src/app/shared/pipes/product-filter.pipe';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showProducts: boolean = false;
  quantityValue: number = 1;
  id: number;
  showButton: boolean = false
  productsList: IProduct[] = [];
  searchList: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router,
    private productFilter: ProductFilterPipe,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {

    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getProducts().subscribe((data: IProduct[]) => { this.productsList = data },
      error => console.log(error));
  }
  displayDetails(id: number) {
    console.log("clicked", id);
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
  addCart(productItem: IProduct) {
    this.cartService.addToCart(productItem);
  }
}
