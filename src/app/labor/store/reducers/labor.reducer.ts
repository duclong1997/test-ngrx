import { Action, createReducer, on } from '@ngrx/store';
import { LaborModel } from './../../models/labor.model';
import {
  loadLabor,
  LoadLaborFail,
  loadLaborSuccess,
} from './../actions/labor.action';

export interface LaborState {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  data: LaborModel[];
}

const initLaborState: LaborState = {
  pageIndex: 0,
  pageSize: 10,
  keyword: '',
  data: [],
};

const laborReducers = createReducer(
  initLaborState,
  on(loadLabor, (state, { pageIndex, pageSize, keyword }) => {
    return { ...state, pageIndex, pageSize, keyword };
  }),
  on(loadLaborSuccess, (state, { data }) => {
    return { ...state, data };
  }),
  on(LoadLaborFail, (state) => {
    return { ...state };
  })
);

export function laborReducer(state: LaborState, action: Action): LaborState {
  return laborReducers(state, action);
}
