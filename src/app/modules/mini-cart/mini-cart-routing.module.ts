import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniCartComponent } from './mini-cart.component';

const routes: Routes = [{ path: '', component: MiniCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniCartRoutingModule { }
