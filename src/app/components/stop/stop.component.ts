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
waitingTimes : Array<WaitingTime> = null;
  constructor(private route: ActivatedRoute, private stopService: StopService, private router: Router) { }

  ngOnInit() {
    this.route.params.map((params: Params) => params['id'])
    .mergeMap(id => this.stopService.getWaitingTime(id))
    .subscribe(waitingTime => this.waitingTimes = waitingTime, error => console.error(error));
  }

  select(waitingTime: WaitingTime) {
    this.router.navigate(["/schedule", waitingTime.arret.codeArret, waitingTime.ligne.numLigne, waitingTime.sens]);
  }
}
