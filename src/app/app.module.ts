import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Survey/dashboard/dashboard.component';
import { FillMediwellSurveyComponent } from './Survey/fill-mediwell-survey/fill-mediwell-survey.component';
import { OverviewComponent } from './Survey/overview/overview.component';
import { AboutComponent } from './Survey/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FillMediwellSurveyComponent,
    OverviewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
