import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StopService {

  constructor(private http: HttpClient) { }
  public getStops(): Observable<String> {
    return this.http.get("http://localhost:4200/ewp/arrets.json").map(o => JSON.stringify(o));
  }
}
