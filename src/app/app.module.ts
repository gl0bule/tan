import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes=[{path: "stop-list", component: StopListComponent}, 
{path: "", redirectTo: "/stop-list", pathMatch: "full"}];


@NgModule({
  declarations: [
    AppComponent,
    StopListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
