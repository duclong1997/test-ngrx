import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import {
  EProductActions,
  LoadProduct,
  LoadProductFail,
  LoadProductSuccess,
} from './../store/actions/product.action';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  // define effect
  @Effect()
  loadProducts$ = this.actions$.pipe(
    // define action of effect
    ofType<LoadProduct>(EProductActions.LOAD_PRODUCT),
    switchMap((action) => {
      console.log(action);
      // call api
      return this.productService.getProducts().pipe(
        // map -> action sucess
        map((products) => {
          return new LoadProductSuccess(products);
        }),
        // catch error -> action fail
        catchError((err) => {
          console.log(err);
          return of(new LoadProductFail(err));
        })
      );
    })
  );
}
