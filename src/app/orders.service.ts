import { Injectable } from '@angular/core';
import { OrderClass} from './orderClass.component';

@Injectable()
export class OrdersService {

  constructor() { }
  orders : OrderClass[] = [];
  getOrders():OrderClass[]{
    return this.orders;
  }
  addOrder(order) :void{
    this.orders.push(order);
  }
  deleteOrder(order) : void{
    var ind = this.orders.indexOf(order);
    this.orders.splice(ind,1);
  }
  incrementOrderPacket(order):void{
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets++;
  }
  decrementOrderPacket(order):void{
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets--;
  }
}
