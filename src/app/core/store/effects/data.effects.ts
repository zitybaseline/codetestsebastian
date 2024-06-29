import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DataActions from '../actions/data.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(DataActions.loadData),
    switchMap(() =>
      this.apiService.getData().pipe(
        map(data => {
          console.log('Data Loaded Successfully:', data);
          return DataActions.loadDataSuccess({ data });
        }),
        catchError(error => {
          console.error('Data Load Failure:', error);
          return of(DataActions.loadDataFailure({ error }));
        })
      )
    )
  ));

  sortData$ = createEffect(() => this.actions$.pipe(
    ofType(DataActions.sortData),
    switchMap(({ sortBy, sortDirection }) =>
      this.apiService.getData({ sortBy, sortDirection }).pipe(
        map(data => {
          console.log('Data Sorted Successfully:', { sortBy, sortDirection, data });
          return DataActions.sortDataSuccess({ data });
        }),
        catchError(error => {
          console.error('Sort Data Failure:', error);
          return of(DataActions.sortDataFailure({ error }));
        })
      )
    )
  ));
}
