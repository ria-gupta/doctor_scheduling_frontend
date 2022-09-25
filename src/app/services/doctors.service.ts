import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctors } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctors[]> {
     return this.http.get<Doctors[]>(this.baseApiUrl + '/api/doctor')
  }

  // addAppointment(addAppointmentRequest: Doctors):Observable<Doctors> {
  //   return this.http.post<Doctors>(this.baseApiUrl + '/api/doctor',addAppointmentRequest);
  // }
}
