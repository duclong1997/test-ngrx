import { createAction, props } from '@ngrx/store';
import { LaborModel } from './../../models/labor.model';

export enum ELaborActions {
  LOAD_LABOR = '[labor] load labor',
  LOAD_LABOR_SUCCESS = '[labor] load labor success',
  LOAD_LABOR_FAIL = '[labor] load labor fail',
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
