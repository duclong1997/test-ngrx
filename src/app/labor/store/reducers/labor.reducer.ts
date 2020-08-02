import { Action, createReducer, on } from '@ngrx/store';
import { LaborModel } from './../../models/labor.model';
import {
  getDetailLabor,
  getDetailLaborFail,
  getDetailLaborSucess,
  loadLabor,
  LoadLaborFail,
  loadLaborSuccess,
} from './../actions/labor.action';

export interface LaborState {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  data: LaborModel[];
  labor: LaborModel;
  id: number;
}

const initLaborState: LaborState = {
  pageIndex: 0,
  pageSize: 10,
  keyword: '',
  data: [],
  id: 0,
  labor: {
    id: 0,
    name: '',
    title: '',
    age: 0,
    gender: 1,
  },
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
  }),
  on(getDetailLabor, (state, { id }) => {
    return { ...state, id };
  }),
  on(getDetailLaborSucess, (state, { labor }) => {
    return { ...state, labor };
  }),
  on(getDetailLaborFail, (state) => {
    return { ...state };
  })
);

export function laborReducer(state: LaborState, action: Action): LaborState {
  return laborReducers(state, action);
}
