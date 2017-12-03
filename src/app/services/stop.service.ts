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

  public getWaitingTime(id:string): Observable<Array<WaitingTime>> {
    return this.http.get<Array<WaitingTime>>("https://proxy-tan.herokuapp.com/stop/"+id);
  }

  public getSchedule(stopId: string, lineId: string, way: number) : Observable<Schedule> {
    return this.http.get<Schedule>("https://proxy-tan.herokuapp.com/schedule/"+ stopId + "/" + lineId + "/" + way);
  }
}
