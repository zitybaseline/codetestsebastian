import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction('[Data] Load Data Success', props<{ data: any[] }>());
export const loadDataFailure = createAction('[Data] Load Data Failure', props<{ error: any }>());

export const sortData = createAction('[Data] Sort Data', props<{ sortBy: string; sortDirection: 'asc' | 'desc' }>());
export const sortDataSuccess = createAction('[Data] Sort Data Success', props<{ data: any[] }>());
export const sortDataFailure = createAction('[Data] Sort Data Failure', props<{ error: any }>());
