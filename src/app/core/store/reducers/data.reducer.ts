import { Action, createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/data.actions';

export interface DataState {
  data: any[];
  loading: boolean;
  error: any;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
  sortBy: '',
  sortDirection: 'asc',
};

const sortDataArray = (data: any[], sortBy: string, sortDirection: 'asc' | 'desc'): any[] => {
  return [...data].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA < valueB) {
      return sortDirection === 'asc' ? -1 : 1;
    } else if (valueA > valueB) {
      return sortDirection === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export const dataReducer = createReducer(
  initialState,

  on(DataActions.loadData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(DataActions.loadDataSuccess, (state, { data }) => ({
    ...state,
    data: sortDataArray(data, state.sortBy, state.sortDirection),
    loading: false,
    error: null,
  })),

  on(DataActions.loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(DataActions.sortData, (state, { sortBy, sortDirection }) => ({
    ...state,
    sortBy,
    sortDirection,
    data: sortDataArray(state.data, sortBy, sortDirection),
  })),

  on(DataActions.sortDataSuccess, (state, { data }) => ({
    ...state,
    data: sortDataArray(data, state.sortBy, state.sortDirection),
    loading: false,
    error: null,
  })),

  on(DataActions.sortDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: DataState | undefined, action: Action) {
  return dataReducer(state, action);
}
