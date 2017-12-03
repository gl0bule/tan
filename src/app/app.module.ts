import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StopListComponent } from './components/stop-list/stop-list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { StopFilter } from './components/stop-list/stop-filter';
import { StopComponent } from './components/stop/stop.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes=[
{path: "stop-list", component: StopListComponent}, 
{path: "stop/:id", component: StopComponent},
{path: "schedule", component: ScheduleComponent},
{path: "", redirectTo: "/stop-list", pathMatch: "full"}];



@NgModule({
  declarations: [
    AppComponent,
    StopListComponent,
    StopFilter,
    StopComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
