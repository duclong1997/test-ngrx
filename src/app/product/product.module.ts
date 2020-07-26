import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductsComponent } from './containers/products/products.component';
import { effects } from './effects/index';
import { ProductRoutingModule } from './product-routing.module';
import { reducerProducts } from './store/index';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // store of model
    StoreModule.forFeature('product', reducerProducts),
    // effect of model
    EffectsModule.forFeature(effects),
  ],
})
export class ProductModule {}
