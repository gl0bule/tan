import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StopService} from '../../services/stop.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [StopService]
})
export class ScheduleComponent implements OnInit {
schedule : Schedule=null;
terminus : string = null;

constructor(private route: ActivatedRoute, private stopService: StopService) { }

  ngOnInit() {
    this.route.params.mergeMap((params: Params) => this.stopService.getSchedule(params['stopId'], params['lineId'], params['way'])
    .map(schedule => {
      return {"schedule":schedule, "way": params['way']};
    }))
    .subscribe(schedule => this.loadSchedule(schedule.schedule, schedule.way), error => console.error(error));
  }
  loadSchedule(schedule: Schedule, way: string) {
    if(way === "1") {
      this.terminus = schedule.ligne.directionSens1;
    } else if (way === "2") {
      this.terminus = schedule.ligne.directionSens2;
    }
    this.schedule = schedule;
  }
}
