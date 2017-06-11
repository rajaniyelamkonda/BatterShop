import { Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { OrderClass} from '../orderClass.component';

const now = new Date();

@Component({
  selector: 'date-comp',
  templateUrl: './date.component.html'
})

export class NdbDateComponent { 

  @Input() Choosedate :OrderClass;

  constructor(config: NgbDatepickerConfig, public activeModal: NgbActiveModal) {
    // customize default values of datepickers used by this component tree
    config.minDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    config.maxDate = { year: now.getFullYear() + 2, month: 12, day: 31 };
  }
  //constructor(public activeModal: NgbActiveModal) {};
  monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  AddDate(){
    this.activeModal.close(this.Choosedate);
  }

  close()
  {
    //this.Choosedate = null ;
    this.activeModal.close(undefined);
  }
  
}