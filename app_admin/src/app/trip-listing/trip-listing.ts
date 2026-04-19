import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripCardComponent } from '../trip-card/trip-card';
import { TripDataService } from '../trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterLink, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListingComponent implements OnInit {
  trips: Array<any> = [];

  constructor(
    private tripDataService: TripDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data: any[]) => {
        this.trips = data;
        console.log('Trips loaded:', this.trips);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error loading trips:', error);
      }
    });
  }
}