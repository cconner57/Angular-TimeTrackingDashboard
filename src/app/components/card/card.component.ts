import { Component, Input } from '@angular/core';
import { dataItem } from '../../mockData';

interface DataTimeframes {
  timeframes: {
    [key: string]: {
      current: number;
      previous: number;
    };
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() dataItem!: dataItem;
  @Input() dateSelector!: string;
  @Input() title!: string;
  @Input() currentHours!: number | undefined;
  @Input() duration!: string;
  @Input() pastHours!: number | undefined;
}
