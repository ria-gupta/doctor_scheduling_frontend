import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Slots } from 'src/app/models/slot';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  slots: Slots[] = [];
  selectedSlot:Slots|undefined;
  @Output() saveSlotForAppointment = new EventEmitter<Slots>();
  constructor(private slotsService: SlotsService) {}

  ngOnInit(): void {
    this.slotsService.getAllSlots()
    .subscribe({
      next: (_slots) => {
        console.log(_slots);
        this.slots = _slots;
      },
      error: (response) => {
        console.log(response);
      }
    });
    
  }
onSlotSelection(val:Slots){
  console.log('-------------entered into onSlotSelection method-------------------')
  this.selectedSlot=val;
  this.saveSlotForAppointment.emit(this.selectedSlot);

  console.log('the selected slot id is:'+val.slotId+ 'and the selected slot name is:' +val.slotName);
  
}

}
