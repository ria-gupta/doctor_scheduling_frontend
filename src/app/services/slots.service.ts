import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slots } from '../models/slot';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllSlots(): Observable<Slots[]> {
     return this.http.get<Slots[]>(this.baseApiUrl + '/api/slot')
  }
}
