import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { AppTranslationService } from './core/services/app-translation.service';
import { ProductFilterPipe } from './shared/pipes/product-filter.pipe';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CheckOutModule } from './modules/check-out/check-out.module';

export function createTranslateLoader(http: HttpClient) {
  return new AppTranslationService(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    FormsModule,
    CheckOutModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ProductFilterPipe],
  bootstrap: [AppComponent],
  exports:[TranslateModule]
})
export class AppModule { }
