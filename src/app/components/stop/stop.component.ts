import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StopService} from '../../services/stop.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css'],
  providers: [StopService]
})
export class StopComponent implements OnInit {
waitingTimes : Array<WaitingTime> = new Array();
  constructor(private route: ActivatedRoute, private stopService: StopService) { }

  ngOnInit() {
    this.route.params.map((params: Params) => params['id'])
    .mergeMap(id => this.stopService.getWaitingTime(id))
    .subscribe(waitingTime => this.waitingTimes = waitingTime, error => console.error(error));
  }
}
