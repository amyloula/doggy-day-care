import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private storageService: StorageService) { }

  requestBooking(data: any) {

  }

  cancelBooking(data: any) {

  }

  requestCancelBooking(data: any) {

  }

  rescheduleBooking(data: any) {

  }
}
