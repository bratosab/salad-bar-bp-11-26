import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
})
export class Salad implements OnInit {

  protected orderService = inject(OrderService);
  protected saladService = inject(SaladService);

  protected toppings = signal<Topping[]>([])

 ngOnInit(): void {
    this.saladService.getToppings().subscribe(toppings => {
      console.table(toppings)
      this.toppings.set(toppings)
    })
  }
}
