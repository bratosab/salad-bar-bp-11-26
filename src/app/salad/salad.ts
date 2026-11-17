import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  imports: [],
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
})
export class Salad {
  protected orderService = inject(OrderService);

}
