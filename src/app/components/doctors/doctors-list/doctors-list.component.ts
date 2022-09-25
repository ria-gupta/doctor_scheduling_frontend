import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Doctors } from 'src/app/models/doctor';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctors[] = [];
  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctorsService.getAllDoctors()
    .subscribe({
      next: (_doctors) => {
        console.log(_doctors);
        this.doctors = _doctors;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
