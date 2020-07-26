import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelector from '../../store/selectors/product.selector';
import * as fromStore from './../../store';
import { LoadProduct } from './../../store/actions/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  loaded = false;
  loading = false;
  products: Product[] = [];
  constructor(private store: Store<fromStore.ProductModelState>) {}

  ngOnInit(): void {
    // select state in store with feature name of store
    this.store.select(fromSelector.getLoaded).subscribe((state) => {
      this.loaded = state;
    });
    this.store.select(fromSelector.getLoading).subscribe((state) => {
      this.loading = state;
    });

    // save action
    this.store.dispatch(new LoadProduct());

    // data products
    this.store.select(fromSelector.getProducts).subscribe((products) => {
      this.products = products;
    });
  }
}
