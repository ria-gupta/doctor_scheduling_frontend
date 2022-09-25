import { Time } from "@angular/common";

export interface Appointments{
    id : string;
    patientName : string;
    doctorName : string;
    doctorId : number;
    appointmentDate : string;
    slotId : number;
    slotName : string;
}