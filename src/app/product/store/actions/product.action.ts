import { Action } from '@ngrx/store';
import { Product } from './../../models/product.model';

// define actions
export enum EProductActions {
  LOAD_PRODUCT = '[product] load product',
  LOAD_PRODUCT_FAIL = '[product] load product fail',
  LOAD_PRODUCT_SUCCESS = '[product] load product success',
}

export class LoadProduct implements Action {
  readonly type = EProductActions.LOAD_PRODUCT;
  constructor() {}
}

export class LoadProductSuccess implements Action {
  readonly type = EProductActions.LOAD_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductFail implements Action {
  readonly type = EProductActions.LOAD_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// action type
export type ProductActionType =
  | LoadProductSuccess
  | LoadProductFail
  | LoadProduct;
