import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StopService {

  constructor(private http: HttpClient) { }
  public getStops(): Observable<Array<Stop>> {
    return this.http.get<Array<Stop>>("https://proxy-tan.herokuapp.com/stops");
  }
}
