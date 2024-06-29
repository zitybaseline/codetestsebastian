import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://private-9b37c2-wlb.apiary-mock.com/accounts';

  constructor(private http: HttpClient) {}

  getData(params: any = {}): Observable<any[]> {
    let httpParams = new HttpParams();

    if (params.sortBy && params.sortDirection) {
      console.log('Sorting Parameters:', params);
      httpParams = httpParams.set('sortBy', params.sortBy);
      httpParams = httpParams.set('sortDirection', params.sortDirection);
    }

    return this.http.get<any[]>(this.apiUrl, { params: httpParams }).pipe(delay(2000),
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }

}