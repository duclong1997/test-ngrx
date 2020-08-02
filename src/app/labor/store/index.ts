import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { laborReducer, LaborState } from './reducers/labor.reducer';

export interface LaborsState {
  labor: LaborState;
}

export const reducers: ActionReducerMap<LaborsState> = {
  labor: laborReducer,
};

export const getLaborsState = createFeatureSelector<LaborsState>('labor');
