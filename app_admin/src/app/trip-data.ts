import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  async getTrips(): Promise<any[]> {
    return await firstValueFrom(
      this.http.get<any[]>(`${this.apiBaseUrl}/trips`)
    );
  }

  addTrip(formData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/trips`, formData);
  }

  getTrip(tripCode: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/trips/${tripCode}`);
  }

  updateTrip(formData: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/trips/${formData.code}`, formData);
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/trips/${tripCode}`);
  }
}