import { createSelector } from '@ngrx/store';
import { getLaborsState } from '..';

export const getLaborState = createSelector(
  getLaborsState,
  (state) => state.labor
);

export const getData = createSelector(getLaborState, (state) => state.data);

export const getLabor = createSelector(getLaborState, (state) => state.labor);
