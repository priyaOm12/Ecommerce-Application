import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {
  cartProducts = [];
  constructor() { }

  ngOnInit() {
    this.getCartItems();
  }
  getCartItems(){
    this.cartProducts = JSON.parse(localStorage.getItem('CARTS'));
  }

}
