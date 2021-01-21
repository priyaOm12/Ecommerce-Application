import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCartRoutingModule } from './mini-cart-routing.module';
import { MiniCartComponent } from './mini-cart.component';


@NgModule({
  declarations: [MiniCartComponent],
  imports: [
    CommonModule,
    MiniCartRoutingModule
  ]
})
export class MiniCartModule { }
