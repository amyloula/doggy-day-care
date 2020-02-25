import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService: CalendarService) { }

  nextAvailableDate: string;
  ngOnInit() {
    this.calendarService.nextAvailableDate.subscribe((res) => {
      this.nextAvailableDate = res;
    })
  }

}
