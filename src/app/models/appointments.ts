import { Time } from "@angular/common";

export interface Appointments{
    id : number;
    patientName : string;
    doctorName : string;
    appointmentDate : string;
    slotStartTime : string;
    slotEndTime : string;
}