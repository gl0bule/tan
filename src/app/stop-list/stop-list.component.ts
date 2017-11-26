import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
longitude: number = -1.553718;
latitude: number = 47.21496;

  constructor() { }

  ngOnInit() {
  }

}
