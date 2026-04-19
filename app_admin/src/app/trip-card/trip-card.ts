import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../trip-data';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent {
  @Input() trip: any;

  constructor(
    private router: Router,
    private tripDataService: TripDataService,
    public authService: AuthenticationService
  ) {}

  editTrip(trip: any): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip', trip.code]);
  }

  deleteTrip(tripCode: string): void {
    const confirmed = window.confirm('Are you sure you want to delete this trip?');

    if (confirmed) {
      this.tripDataService.deleteTrip(tripCode).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
}