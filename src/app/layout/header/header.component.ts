import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  logoPath = 'assets/images/natureLogo.jpg';
  profilePath = 'assets/images/profile.jpg';
  cartCountValue;
  cardItems = [];
  show = false
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(){
    let count = 0
      this.cardItems = JSON.parse(localStorage.getItem('CARTS'));
  for(let cartItem of this.cardItems){
    count  += cartItem.productQuantity;
  }
    this.cartCountValue = count;
    console.log(this.cartCountValue);
  }



}
