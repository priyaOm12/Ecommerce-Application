import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { CheckOutComponent } from './modules/check-out/check-out/check-out.component';
import { PaymentComponent } from './modules/check-out/payment/payment.component';
import { OrderSummaryComponent } from './modules/check-out/order-summary/order-summary.component';
import { BillingComponent } from './modules/check-out/billing/billing.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'check-out/payment', component:PaymentComponent },
  { path: 'check-out/order-summary', component:OrderSummaryComponent },
  { path: 'check-out/billing', component:BillingComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
