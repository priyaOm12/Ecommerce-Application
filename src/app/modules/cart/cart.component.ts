import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = [];
  totalAmout: number;
  discountAmount: number
  quantityCountValue: number;
  payableAmount: number
  constructor(
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getCartItems();

  }
  getCartItems() {
    this.cartProducts = JSON.parse(localStorage.getItem('CARTS'));
    this.cartCalculations(this.cartProducts);
  }
  cartCalculations(cartItems) {
    let amount = 0;
    let discountAmountValue = 0;
    let payableAmountValue = 0;
    for (let i = 0; i < cartItems.length; i++) {
      amount += ((cartItems[i].productQuantity) * (cartItems[i].productPrice));
      console.log(amount);
      discountAmountValue += (((15 / 100) * cartItems[i].productPrice) * cartItems[i].productQuantity);
      console.log('discount: ', discountAmountValue);
    }
    this.totalAmout = amount;
    this.discountAmount = discountAmountValue;
    payableAmountValue = amount - discountAmountValue;
    this.payableAmount = payableAmountValue;

  }
  decreaseQuantityValue(productItem) {
    this.cartService.decreaseQuantity(productItem);
    this.getCartItems();
  }
  increaseQuantityValue(productItem) {
    this.cartService.increaseQuantity(productItem);
    this.getCartItems();
  }
  quantityValueChanges(productItem) {
    console.log('quantity ......', productItem.productQuantity);
    this.cartService.updateItemQuantity(productItem);
    this.getCartItems();
  }
  deleteItem(productItem) {
    this.cartService.deleteCartItem(productItem);
    this.getCartItems();
  }
  trackByProductId(index: number, product: any): string {
    return product.productId;
  }
  processToCheckOut() {
    this.router.navigate(['check-out/billing']);
  }

}


