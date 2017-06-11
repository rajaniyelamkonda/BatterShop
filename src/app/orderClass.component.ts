import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
    selector:'Order-class',
    template:``
})

export class OrderClass {
  date: NgbDateStruct = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  packets: number = 1;
}
