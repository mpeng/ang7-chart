import { Injectable } from '@angular/core';
import { Timelinedata } from './../Models/Timelinedata';
import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
  private baseUrl = 'https://rary.lib.id/timelinedata@dev/';

  constructor(private http: Http) { }

  getRawData():  Promise<Timelinedata[]> {
    return this.http.get('https://rary.lib.id/timelinedata@dev/getTimelinedata/')
      .toPromise()
      .then(response => response.json() as Timelinedata[])
      .catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
