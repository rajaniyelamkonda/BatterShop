import { Component, OnInit,Input } from '@angular/core';
import { MenuComponent } from '../home/home.component';
import { OrderClass} from '../orderClass.component';
import{OrdersService} from '../orders.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
constructor(private orderService : OrdersService){}

order:OrderClass;
orders : OrderClass[] = this.orderService.getOrders();

}
