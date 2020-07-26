import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import {
  LoadProduct,
  EProductActions,
} from './../../store/actions/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  loaded = false;
  loading = false;
  constructor(private store: Store<fromStore.ProductModelState>) {}

  ngOnInit(): void {
    // select state in store with feature name of store
    this.store.select(fromStore.getLoaded).subscribe((state) => {
      this.loaded = state;
    });
    this.store.select(fromStore.getLoading).subscribe((state) => {
      this.loading = state;
    });

    // save action
    this.store.dispatch(new LoadProduct());

    this.store.select(fromStore.getProducts).subscribe((product) => {
      console.log(product);
    });
  }
}
