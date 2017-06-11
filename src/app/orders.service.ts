import { Injectable } from '@angular/core';
import { OrderClass} from './orderClass.component';

@Injectable()
export class OrdersService {

  constructor() { }
  orders : OrderClass[];
  getOrders():OrderClass[]{
    return this.orders;
  }
  addOrder(order) :void{
    this.orders.push(order);
  }
  deleteOrder(ord) : void{
    this.orders.pop();
  }
  updateOrder(order) : void{
    
  }

}
