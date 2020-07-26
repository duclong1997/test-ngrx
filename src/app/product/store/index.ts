import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromReducer from './reduces/product.reducer';

// state model (all states of model)
export interface ProductModelState {
  product: fromReducer.ProductState;
}

// reducer model (all reducers of model)
export const reducerProducts: ActionReducerMap<ProductModelState> = {
  product: fromReducer.reducer,
};

// get selector state model of reducer model
export const getProductModelState = createFeatureSelector<ProductModelState>(
  'product'
);

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
