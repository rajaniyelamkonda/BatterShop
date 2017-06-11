import { Component } from '@angular/core';
import {NgbDateStruct, NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NdbDateComponent } from './date.component';
import { Router} from '@angular/router';
import { OrderClass} from '../orderClass.component';

const now = new Date();

@Component({
  selector: 'menu-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class MenuComponent {

  orders: OrderClass[] = [];
  inputdisp = "none";
  buttonCartdisp = "block";
  buttonDatedisp = "none";
  newOrder: OrderClass;
  monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  constructor(private modal: NgbModal,private router: Router) {}

  AddDateAndPackets(order: OrderClass) {
    this.orders.push(order);
    this.inputdisp = "block";
    console.log("adding ordder");
    if (this.orders.length != 0) {
      this.buttonCartdisp = "none";
      this.buttonDatedisp = "block"
    }
    else {
      this.buttonCartdisp = "block";
      this.buttonDatedisp = "none"
    }

  }
  open() {
    this.newOrder = new OrderClass();
    let options: NgbModalOptions = {
       size: 'sm'
    };
    const modalRef = this.modal.open(NdbDateComponent, options);
    modalRef.componentInstance.Choosedate = this.newOrder;

    modalRef.result.then((result) => {
      if (result) {
        this.AddDateAndPackets(result);
      }
    }, (reason) => {
      console.log(`Closed with reason : ${reason}`);
    });
  }
  deletePacket(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets = this.orders[ind].packets - 1;

    if (order.packets == 0) {
      this.orders.splice(ind, 1);
    }
    if (this.orders.length != 0) {
      this.buttonCartdisp = "none";
      this.buttonDatedisp = "block";
    }
    else {
      this.buttonCartdisp = "block";
      this.buttonDatedisp = "none";
    }
  }
  addPackets(order: OrderClass): void {
    order.packets++;
  }
}



