import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Topping } from '../models/topping.model';
import { map } from 'rxjs';

@Service()
export class SaladService {
    private http = inject(HttpClient)

    getToppings() {
        return this.http.get<Topping[]>("https://retoolapi.dev/XDaOzA/toppings")
    }

    private chosenToppingsList = signal<Topping[]>([])
    
    public totalPrice = computed(() => {
        let total = 0
        this.chosenToppings().forEach(element => {
            total += element.price
        });
        return total
    })

    get chosenToppings() {
        return this.chosenToppingsList.asReadonly()
    }

    chooseTopping(topping: Topping){
        this.chosenToppingsList.update((value: Topping[]) => [...value, topping])
    }

    removeTopping(id: number){
        this.chosenToppingsList.update(value => value.filter(topping => topping.id !== id))
    }
}
