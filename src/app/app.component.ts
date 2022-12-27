import { Component } from '@angular/core';
import { DateData } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataList = DateData;
  dateSelector = 'weekly';
  console = console;

  changeDateSelector(newDate: string): void {
    console.log('log1', newDate);
    this.dateSelector = newDate;
  }
}
