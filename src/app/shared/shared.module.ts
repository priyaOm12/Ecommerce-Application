import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AddButtonDirective } from './directives/add-button.directive';



@NgModule({
  declarations: [ProductFilterPipe, AddButtonDirective],
  imports: [
    CommonModule
  ],
  exports:[ProductFilterPipe]
})
export class SharedModule { }
