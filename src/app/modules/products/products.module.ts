import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
