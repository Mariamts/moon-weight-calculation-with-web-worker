import { Component } from '@angular/core';
import { MoonCalculatorService } from './moon-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userWeight: number = 0;
  moonWeight: number = 0;

  constructor(private moonCalculatorService: MoonCalculatorService) { }

  calculateMoonWeight() {
    this.moonCalculatorService.calculateMoonWeight(this.userWeight)
      .then((result) => {
        this.moonWeight = result;
      })
      .catch((error) => {
        console.error('An error occurred while calculating Moon weight:', error);
      });
  }

}
