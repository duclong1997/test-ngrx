import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
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
