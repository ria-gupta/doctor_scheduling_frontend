import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { DoctorsListComponent } from './components/doctors/doctors-list/doctors-list.component';
import { FormsModule } from '@angular/forms';
import { SlotsComponent } from './components/doctors/doctors-list/add-appointment/slots/slots.component';
import { AddAppointmentComponent } from './components/doctors/doctors-list/add-appointment/add-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsListComponent,
    DoctorsListComponent,
    AddAppointmentComponent,
    SlotsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
