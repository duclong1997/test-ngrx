import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LaborService } from '../services/labor.service';
import {
  getDetailLabor,
  getDetailLaborFail,
  getDetailLaborSucess,
  loadLabor,
  LoadLaborFail,
  loadLaborSuccess,
} from '../store/actions/labor.action';

@Injectable()
export class LaborEffect {
  constructor(private actions: Actions, private laborService: LaborService) {}

  // way 1:
  @Effect()
  getDetailLabor$: Observable<Action> = this.actions.pipe(
    ofType(getDetailLabor),
    switchMap((action) => {
      return this.laborService.getLaborById(action.id).pipe(
        map((data) => {
          return getDetailLaborSucess({ labor: data });
        }),
        catchError((err) => {
          console.log(err);
          return of(getDetailLaborFail());
        })
      );
    })
  );

  // way 2:
  loadLabor$ = createEffect(() =>
    this.actions.pipe(
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
    )
  );
}
