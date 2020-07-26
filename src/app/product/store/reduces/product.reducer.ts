import { EProductActions, ProductActionType } from '../actions/product.action';
import { Product } from './../../models/product.model';
// state
export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

// instant state
export const initProductState: ProductState = {
  data: [],
  loaded: false,
  loading: false,
};

// reducer (update)
export function reducer(
  state = initProductState,
  actionType: ProductActionType
): ProductState {
  switch (actionType.type) {
    case EProductActions.LOAD_PRODUCT:
      return { ...state, loading: true, loaded: false };
    case EProductActions.LOAD_PRODUCT_SUCCESS:
      return { ...state, loaded: true, loading: false };
    case EProductActions.LOAD_PRODUCT_FAIL:
      return { ...state, loading: false, loaded: false };
    default:
      return state;
  }
}

// value of state (get)
export const getProductLoading = (state: ProductState) => state.loading;
export const getProductLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;
