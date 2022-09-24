import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Doctors } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctors[] = [
    {
      doctorId: 210,
      doctorName: 'Dr. John Doe',
      status: 'Available',
    },
    {
      doctorId: 222,
      doctorName: 'Dr. Jane Doe',
      status: 'Available',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
