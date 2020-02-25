import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private _nextAvailableDate: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public readonly nextAvailableDate: Observable<
    any
  > = this._nextAvailableDate.asObservable();
  constructor(private bookingService: BookingService) {
    this.getNextAvailableDate();
   }

  getNextAvailableDate() {
    this._nextAvailableDate.next('2020-02-28');
  }

  getAvailability(date: string) {

  }
}
