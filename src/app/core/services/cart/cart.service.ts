import { Injectable } from '@angular/core';

import { IProduct } from '../../interfaces/IProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  id: number;
  constructor() { }
  addToCart(productItem: IProduct, quantityCount?: number) {
    let cartExist = false;
    this.id = productItem.productId;
    if (localStorage.getItem('CARTS') === null || localStorage.getItem('CARTS') == undefined) {
      let cartItem = {
        productId: productItem.productId,
        productImagePath: productItem.productImagePath,
        productName: productItem.productName,
        productPrice: productItem.productPrice,
        productQuantity: 1,
      }
      this.cartItems.push(cartItem);
      localStorage.setItem('CARTS', JSON.stringify(this.cartItems))
      console.log(this.cartItems);
      cartExist = true;
    }
    else if (!quantityCount) {

      let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
      for (let i = 0; i < localCartItems.length; i++) {
        if (localCartItems[i].productId == productItem.productId) {
          localCartItems[i].productQuantity = localCartItems[i].productQuantity + 1;
          cartExist = true;
          localStorage.setItem('CARTS', JSON.stringify(localCartItems));
          break;
        }
      }
    }
    else if (quantityCount > 0) {
      let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
      for (let i = 0; i < localCartItems.length; i++) {
        if (localCartItems[i].productId == productItem.productId) {
          localCartItems[i].productQuantity = localCartItems[i].productQuantity + Number(quantityCount);
          cartExist = true;
          localStorage.setItem('CARTS', JSON.stringify(localCartItems));
          break;
        }
      }
    }
    if (!cartExist) {
      let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
      let cartItem = {
        productId: productItem.productId,
        productImagePath: productItem.productImagePath,
        productName: productItem.productName,
        productPrice: productItem.productPrice,
        productQuantity: 1
      }
      localCartItems.push(cartItem);
      localStorage.setItem('CARTS', JSON.stringify(localCartItems));
    }
  }
  decreaseQuantity(productItem) {
    let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
    for (let i = 0; i < localCartItems.length; i++) {
      if (localCartItems[i].productId == productItem.productId) {
        localCartItems[i].productQuantity = localCartItems[i].productQuantity - 1;
        localStorage.setItem('CARTS', JSON.stringify(localCartItems));
        break;
      }
    }
  }
  increaseQuantity(productItem) {
    let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
    for (let i = 0; i < localCartItems.length; i++) {
      if (localCartItems[i].productId == productItem.productId) {
        localCartItems[i].productQuantity = localCartItems[i].productQuantity + 1;
        localStorage.setItem('CARTS', JSON.stringify(localCartItems));
        break;
      }
    }
  }
  updateItemQuantity(productItem) {
    let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
    for (let i = 0; i < localCartItems.length; i++) {
      if (localCartItems[i].productId == productItem.productId) {
        localCartItems[i].productQuantity = productItem.productQuantity;
        localStorage.setItem('CARTS', JSON.stringify(localCartItems));
        break;
      }
    }
  }
  deleteCartItem(productItem) {
    let localCartItems = JSON.parse(localStorage.getItem('CARTS'));
    for (let i = 0; i < localCartItems.length; i++) {
      if (localCartItems[i].productId == productItem.productId) {
        localCartItems.splice(i, 1);
      }
    }
    localStorage.setItem('CARTS', JSON.stringify(localCartItems));
  }
}
















