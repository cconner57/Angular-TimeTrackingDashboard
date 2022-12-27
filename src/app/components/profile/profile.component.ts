import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() selectedDate = '';
  @Output() newDateEvent = new EventEmitter();
  console = console

  onDateSelect(date: string): void {
    console.log('date', date);
    this.newDateEvent.emit(date);
  }
}
