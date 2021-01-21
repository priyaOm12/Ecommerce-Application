import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appStoreIconPath = 'assets/images/appStoreIcon.jpg';
  googlePlayIconPath = 'assets/images/googlePlayIcon.jpg';
  constructor() { }

  ngOnInit() {
  }

}
