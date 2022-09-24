import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { DoctorsListComponent } from './components/doctors/doctors-list/doctors-list.component';

const routes: Routes = [
  {
    path: 'view_appointments',
    component: AppointmentsListComponent
  },
  {
    path: 'book_appointment',
    component: DoctorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
