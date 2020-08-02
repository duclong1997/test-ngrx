import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LaborService } from '../services/labor.service';
import {
  loadLabor,
  LoadLaborFail,
  loadLaborSuccess,
} from '../store/actions/labor.action';
import { Injectable } from '@angular/core';

@Injectable()
export class LaborEffect {
  constructor(private actions: Actions, private laborService: LaborService) {}

  @Effect()
  public loadLabor$: Observable<Action> = this.actions.pipe(
    ofType(loadLabor),
    switchMap((action) => {
      return this.laborService
        .getLabors(action.pageIndex, action.pageSize, action.keyword)
        .pipe(
          map((data) => {
            return loadLaborSuccess({ data });
          }),
          catchError((err) => {
            console.log(err);
            return of(LoadLaborFail());
          })
        );
    })
  );
}
