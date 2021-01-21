import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems = [];
  constructor(private router:Router) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('CARTS'));
  }
  successPage() {
    let carts =  [];
    localStorage.setItem('CARTS', JSON.stringify(carts));
    this.router.navigate(['check-out/order-summary']);
  }


}
