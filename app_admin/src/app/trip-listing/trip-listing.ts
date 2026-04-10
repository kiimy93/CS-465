import { Component, OnInit } from '@angular/core';
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

  constructor(private tripDataService: TripDataService) {}

  async ngOnInit(): Promise<void> {
    this.trips = await this.tripDataService.getTrips();
  }
}