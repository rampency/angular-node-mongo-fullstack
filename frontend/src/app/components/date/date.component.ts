import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  @Output() btnClick = new EventEmitter<string>();
  date : Date;
  constructor() {}

  ngOnInit(): void {
    this.date = new Date(1610053200 * 1000)
  }

  dateChanged(eventDate: string) {
    console.log(eventDate)
    this.btnClick.emit(eventDate)
  }
}
