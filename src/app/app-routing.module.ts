import { DashboardComponent } from './Survey/dashboard/dashboard.component';
import { OverviewComponent } from './Survey/overview/overview.component';
import { AboutComponent } from './Survey/about/about.component';
import { FillMediwellSurveyComponent } from './Survey/fill-mediwell-survey/fill-mediwell-survey.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'fill-survey', component: FillMediwellSurveyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'overview', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
