import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title='App';
   sum: number = 0;
  constructor(calc:CalculatorService){
    this.sum = calc.add(0,1,2,3,4,5,6,7,8,9,10);
  }
}
