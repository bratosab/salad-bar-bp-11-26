import { Component, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-toppings',
  styleUrl: './toppings.scss',
  templateUrl: './toppings.html',
})
export class Toppings {
  public toppings = input<Topping[]>([])
  public buttonLabel = input<string>('')
  public placeholderLabel = input<string>('')

  public clickTopping = output<Topping>()
}
