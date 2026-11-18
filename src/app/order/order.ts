import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput, MatButton],
  selector: 'app-order',
  styleUrl: './order.scss',
  templateUrl: './order.html',
})
export class Order {
  private formBuilder = inject(FormBuilder);
  // private orderService = inject(OrderService);
  private router = inject(Router);
  private store = inject(Store)

  protected orderForm = this.formBuilder.nonNullable.group({
    name: ['Mike', Validators.required],
    tel: ['0606060606', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  protected onSubmit() {
    if(this.orderForm.valid) {
      this.store.dispatch(SetName({ name: this.orderForm.controls.name.value }))
      this.store.dispatch(SetTel({ tel: this.orderForm.controls.tel.value }))

      // this.orderService.name.set(this.orderForm.controls.name.value)
      // this.orderService.tel.set(this.orderForm.controls.tel.value)

      this.router.navigate(['salad'])
    }
  }
}
