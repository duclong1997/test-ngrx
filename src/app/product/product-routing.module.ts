import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
