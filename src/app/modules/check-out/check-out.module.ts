import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out/check-out.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [CheckOutComponent, BillingComponent, PaymentComponent, OrderSummaryComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CheckOutModule { }
