import { Component, OnInit } from '@angular/core';
import { StopService} from '../services/stop.service';
import { StopFilter} from './stop-filter';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css'],
  providers: [StopService, StopFilter]
})

export class StopListComponent implements OnInit {
longitude: number = -1.553718;
latitude: number = 47.21496;
stopSearch: String = "50";
stops: Array<Stop> = new Array();
  constructor(private stopService: StopService) { }

  ngOnInit() {
    this.loadStops();
  }
  
  loadStops() {
    this.stopService.getStops().subscribe(stop => this.stops = stop, error => console.error(error));
  }
}
