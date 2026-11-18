import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';
import { Toppings } from './toppings/toppings';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { SaladState } from './store/salad.reducer';
import { ChooseTopping, GetToppings, RemoveTopping } from './store/salad.actions';
import { selectTotalPrice } from './store/salad.selectors';

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
  protected toppings = this.store.selectSignal((state) => state.salad.toppings);
  protected chosenToppings = this.store.selectSignal((state) => state.salad.chosenToppings);
  protected totalPrice = this.store.selectSignal(selectTotalPrice)

  // public totalPrice = computed(() => {
  //   let total = 0;
  //   this.chosenToppings().forEach((element) => {
  //     total += element.price;
  //   });
  //   return total;
  // });

  // protected toppings = signal<Topping[]>([]);

  ngOnInit(): void {
    this.store.dispatch(GetToppings());
    // this.saladService.getToppings().subscribe((toppings) => {
    //   console.table(toppings);
    //   this.toppings.set(toppings);
    // });
  }

  chooseTopping(toppingToAdd: Topping) {
    this.store.dispatch(ChooseTopping({ toppingToAdd }));
  }

  removeTopping(toppingToRemove: Topping) {
    this.store.dispatch(RemoveTopping({ toppingToRemove }));
  }
}
