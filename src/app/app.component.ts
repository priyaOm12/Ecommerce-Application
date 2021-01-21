import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcommerceApplication';
  selectedCountryId: string;
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('english');

  }
  countries = [
    {
      countryId: "usa",
      languages: ['english', 'spanish']
    },
    {
      countryId: "canada",
      languages: ['english', 'french']
    }
  ]

  countryChange(val) {
    console.log(val);
    this.selectedCountryId = val;
  }
}

