import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from '../reducers/data.reducer';

export const selectDataState = createFeatureSelector<DataState>('data');

export const isLoading = createSelector(
  selectDataState,
  (state: DataState) => state.loading
);

export const selectSortedData = createSelector(
  selectDataState,
  (state: DataState) => state.data
);

export const isDataLoaded = createSelector(
  selectSortedData,
  (data: any[]) => data.length > 0
);
