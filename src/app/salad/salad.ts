import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';
import { Toppings } from './toppings/toppings';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { SaladState } from './store/salad.reducer';
import { ChooseTopping, RemoveTopping } from './store/salad.actions';

@Component({
  imports: [CurrencyPipe, Toppings],
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
})
export class Salad implements OnInit {
  protected saladService = inject(SaladService);
  private store: Store<{ app: AppState; salad: SaladState }> = inject(Store);

  protected name = this.store.selectSignal((state) => state.app.name);
  protected chosenToppings = this.store.selectSignal((state) => state.salad.chosenToppings);

  protected toppings = signal<Topping[]>([]);

  ngOnInit(): void {
    this.saladService.getToppings().subscribe((toppings) => {
      console.table(toppings);
      this.toppings.set(toppings);
    });
  }

  chooseTopping(toppingToAdd: Topping){
    this.store.dispatch(ChooseTopping({ toppingToAdd }))
  }

  removeTopping(toppingToRemove: Topping) {
    this.store.dispatch(RemoveTopping({ toppingToRemove }))
  }
}
