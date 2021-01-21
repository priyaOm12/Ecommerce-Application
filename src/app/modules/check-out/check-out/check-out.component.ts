import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartItems = [];
  constructor() { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('CARTS'));
  }

}
