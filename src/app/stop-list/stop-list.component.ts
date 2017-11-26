import { Component, OnInit } from '@angular/core';
import { StopService} from '../services/stop.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css'],
  providers: [StopService]
})
export class StopListComponent implements OnInit {
longitude: number = -1.553718;
latitude: number = 47.21496;
val: String = "";
stops: Array<string> = new Array();
  constructor(private stopService: StopService) { }

  ngOnInit() {
    this.stops.push("commerce");
    this.stops.push("ecole");
    this.stops.push("stade");
    this.stops.push("mairie");
  }

}
