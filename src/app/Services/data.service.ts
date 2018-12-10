import { Injectable } from '@angular/core';
import { Timelinedata } from './../Models/Timelinedata';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class DataService {
  private baseUrl = 'https://rary.lib.id/timelinedata@dev/';

  constructor(private http: HttpClient) { }

  getTimelinedata(operator: string = '/getTimelinedata') {
    return this.http.get<Timelinedata[]>(this.baseUrl + operator).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('There was a problem with the data call.');
  };
}
