import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  freshFoodPath = 'assets/images/food.jpg';
  pineapplePath = 'assets/images/pineapple.jpg';
  healthyFoodPath = 'assets/images/healthyFood.jpg';
  freeShippingPath = 'assets/images/freeShipping.jpg';
  chickenPath = 'assets/images/chicken.jpg';
  easyReturnPath = 'assets/images/easyReturns.jpg';
  securePaymentPath = 'assets/images/securePayment.jpg';
  supportPath = 'assets/images/support.jpg';
  constructor() { }

  ngOnInit() {
  }

}
