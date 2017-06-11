import { Component, OnInit,Input } from '@angular/core';
import { MenuComponent } from '../home/home.component';
import { OrderClass} from '../orderClass.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{

order:OrderClass;

}
