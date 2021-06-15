import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private date: Date = new Date(1610053200 * 1000)
  private subject = new BehaviorSubject<any>(this.date);
  constructor() {}

  addDate(date): void {
    this.date = date;
    this.subject.next(this.date);
  }

  onDate(): Observable<any> {
    return this.subject.asObservable();
  }
}
