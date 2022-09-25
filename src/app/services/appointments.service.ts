import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointments } from '../models/appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<Appointments[]> {
     return this.http.get<Appointments[]>(this.baseApiUrl + '/api/appointments')
  }

  addAppointment(addAppointmentRequest: Appointments):Observable<Appointments> {
    addAppointmentRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Appointments>(this.baseApiUrl + '/api/appointments',addAppointmentRequest);
  }

  deleteAppointment(id:string):Observable<Appointments>{
     return this.http.delete<Appointments>(this.baseApiUrl+'/api/appointments/' + id);
  }
}
