import { createSelector } from '@ngrx/store';
import { getProductModelState } from '..';
import * as fromReducer from '../reduces/product.reducer';
import { ProductModelState } from './../index';

// get selector state of reducer (product)
export const getProductState = createSelector(
  getProductModelState,
  (state: ProductModelState) => state.product
);

// get value selector of state
export const getProducts = createSelector(
  getProductState,
  fromReducer.getProducts
);
export const getLoading = createSelector(
  getProductState,
  fromReducer.getProductLoading
);
export const getLoaded = createSelector(
  getProductState,
  fromReducer.getProductLoaded
);
