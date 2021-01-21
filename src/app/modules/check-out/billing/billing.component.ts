import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  cartItems = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('CARTS'));
  }

  cardPage() {
    this.router.navigate(['check-out/payment']);
  }
}
