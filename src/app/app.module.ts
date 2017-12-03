import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { StopFilter } from './stop-list/stop-filter';

const routes: Routes=[{path: "stop-list", component: StopListComponent}, 
{path: "", redirectTo: "/stop-list", pathMatch: "full"}];


@NgModule({
  declarations: [
    AppComponent,
    StopListComponent,
    StopFilter
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
