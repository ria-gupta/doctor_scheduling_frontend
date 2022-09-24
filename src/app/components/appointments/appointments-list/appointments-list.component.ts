import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/models/appointments';
import { AppointmentsService } from 'src/app/services/appointments.service';


@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointments: Appointments[] = [];
  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointments()
    .subscribe({
      next: (_appointments) => {
        console.log(_appointments);
        this.appointments = _appointments;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
