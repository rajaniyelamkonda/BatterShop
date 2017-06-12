import { Component,OnInit } from '@angular/core';
import {NgbDateStruct, NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NdbDateComponent } from './date.component';
import { Router} from '@angular/router';
import { OrderClass} from '../orderClass.component';
import {OrdersService} from '../orders.service';

const now = new Date();

@Component({
  selector: 'menu-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class MenuComponent {

  orders: OrderClass[]=this.ordersService.getOrders();
  buttonCartdisp = "block";
  buttonDatedisp = "none";
  newOrder: OrderClass;
  monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  constructor(private modal: NgbModal,private router: Router, private ordersService : OrdersService) { }
  
  AddDateAndPackets(order: OrderClass) {
    this.ordersService.addOrder(order);
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
    deletePacket(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.ordersService.decrementOrderPacket(this.orders[ind]);

    if (order.packets == 0) {
      this.ordersService.deleteOrder(order);
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
  addPackets(order):void{
    var ind = this.orders.indexOf(order);
    this.ordersService.incrementOrderPacket(this.orders[ind]);
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
}



