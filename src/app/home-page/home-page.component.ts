import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly pageTitle:string = 'FOOD DIARY';
  readonly createMeal:string = 'Create Meal';
  readonly logMeal:string = 'Log Meal';

  constructor() { }

  ngOnInit(): void {

  }

}
