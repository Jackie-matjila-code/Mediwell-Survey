import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
      // tslint:disable-next-line: typedef
      fillSurvey(){
       this.router.navigateByUrl('fill-survey');
      }

      fillOverview(){
        this.router.navigateByUrl('overview');
      }
}
