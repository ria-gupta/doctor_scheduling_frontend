import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointments } from 'src/app/models/appointments';
import { Slots } from 'src/app/models/slot';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  addAppointmentRequest: Appointments = {
    id: '',
    patientName: '',
    doctorName: '',
    doctorId:0,
    appointmentDate: '',
    slotId:0,
    slotName: ''
  };

  constructor(private appointmentService: AppointmentsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addAppointmentRequest.doctorId=this.route.snapshot.params['doctorId'];
    console.log(this.addAppointmentRequest.doctorId);
    this.route.queryParams
  .subscribe((params) => {
    this.addAppointmentRequest.doctorName = params['doctorName'];
    console.log(this.addAppointmentRequest.doctorName);
  }
);
  }

  onSelectingSlot(selectedSlot:Slots){
    this.addAppointmentRequest.slotId=selectedSlot.slotId;
    this.addAppointmentRequest.slotName=selectedSlot.slotName;
    console.log('------Appointement Request Creation-------------')
    console.log('The appointment request slot id is : '+this.addAppointmentRequest.slotId+'the selected slot name is: '+this.addAppointmentRequest.slotName)
  }
  addAppointment() { 
    console.log(this.addAppointmentRequest);
     this.appointmentService.addAppointment(this.addAppointmentRequest).subscribe({
      next: (appointment) => {
        console.log(appointment);
      }
     })
  
  }
}
