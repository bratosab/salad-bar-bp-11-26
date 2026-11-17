import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput, MatButton],
  selector: 'app-order',
  styleUrl: './order.scss',
  templateUrl: './order.html',
})
export class Order {
  private formBuilder = inject(FormBuilder);

  protected orderForm = this.formBuilder.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  protected onSubmit() {
    if(this.orderForm.valid) {

    }
  }
}
