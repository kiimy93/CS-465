import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AuthResponse } from './models/auth-response';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/trips`);
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

  login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  private handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/${endpoint}`, formData);
  }
}