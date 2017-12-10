import { Component, OnInit } from '@angular/core';
import { StopService} from '../../services/stop.service';
import { StopFilter} from './stop-filter';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css'],
  providers: [StopService, StopFilter]
})

export class StopListComponent implements OnInit {
longitude: number = -1.553718;
latitude: number = 47.21496;
stopSearch: String = "";
stops: Array<Stop> = new Array();
  constructor(private stopService: StopService, private router: Router) { }

  ngOnInit() {
    this.loadStops();
  }
  
  loadStops() {
    this.stops=null;
    this.stopService.getStops().subscribe(stop => this.stops = stop, error => console.error(error));
  }

  select(stop: Stop) {
    this.router.navigate(["/stop", stop.codeLieu]);
  }

  loadStopsByPosition() {
    this.stops=null;
    this.getPosition()
    .mergeMap(position => this.stopService.getStopsByPosition(position.coords.latitude, position.coords.longitude))
    .subscribe(stops => this.stops = stops, error => console.error(error));
  }

  loadStopsByPositionFake() {
    this.stops=null;
    this.stopService.getStopsByPosition(47.178124, -1.561403)
    .subscribe(stops => this.stops = stops, error => console.error(error));
  }
  
  getPosition(): Observable<Position> {
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition(position => {  
       observer.next(position);
       observer.complete();
      }, error => observer.error(error))
    })
  }
}
