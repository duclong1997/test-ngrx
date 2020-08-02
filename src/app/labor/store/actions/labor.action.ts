import { createAction, props } from '@ngrx/store';
import { LaborModel } from './../../models/labor.model';

export enum ELaborActions {
  LOAD_LABOR = '[labor] load labor',
  LOAD_LABOR_SUCCESS = '[labor] load labor success',
  LOAD_LABOR_FAIL = '[labor] load labor fail',

  GET_DETAIL_LABOR = '[labor] get detail labor',
  GET_DETAIL_LABOR_SUCCESS = '[labor] get detail labor success',
  GET_DETAIL_LABOR_FAIL = '[labor] get detail labor fail',
}

export const loadLabor = createAction(
  ELaborActions.LOAD_LABOR,
  props<{ pageIndex: number; pageSize: number; keyword: string }>()
);

export const loadLaborSuccess = createAction(
  ELaborActions.LOAD_LABOR_SUCCESS,
  props<{ data: LaborModel[] }>()
);

export const LoadLaborFail = createAction(ELaborActions.LOAD_LABOR_FAIL);

export const getDetailLabor = createAction(
  ELaborActions.GET_DETAIL_LABOR,
  props<{ id: number }>()
);

export const getDetailLaborSucess = createAction(
  ELaborActions.GET_DETAIL_LABOR_SUCCESS,
  props<{ labor: LaborModel }>()
);

export const getDetailLaborFail = createAction(
  ELaborActions.GET_DETAIL_LABOR_FAIL
);
