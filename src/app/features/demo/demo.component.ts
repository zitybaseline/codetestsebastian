import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataState } from '../../core/store/reducers/data.reducer';
import {
  isDataLoaded,
  isLoading,
  selectSortedData,
} from '../../core/store/selectors/data.selectors';
import { loadData, sortData } from '../../core/store/actions/data.actions';

@Component({
  selector: 'app-demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  imports: [CommonModule, RouterModule, SpinnerComponent],
})
export class DemoComponent implements OnInit {
  isLoading: Observable<boolean> = this.store.select(isLoading);
  isDataLoaded$: Observable<boolean> = this.store.select(isDataLoaded);
  data$: Observable<any[]> = this.store.select(selectSortedData);

  displayedColumns: string[] = [
    'id',
    'accountId',
    'bank',
    'balance',
    'currency',
  ];

  private sortState: { sortBy: string; sortDirection: 'asc' | 'desc' } = {
    sortBy: '',
    sortDirection: 'asc'
  };

  constructor(private store: Store<DataState>) {}

  ngOnInit() {}

  loadData() {
    this.store.dispatch(loadData());
  }

  sortData(column: string) {
    if (this.sortState.sortBy === column) {
      this.sortState.sortDirection = this.sortState.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortState.sortBy = column;
      this.sortState.sortDirection = 'asc';
    }

    this.store.dispatch(sortData({ sortBy: this.sortState.sortBy, sortDirection: this.sortState.sortDirection }));
  }
}