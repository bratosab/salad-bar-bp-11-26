import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Order } from './order';
import { provideStore } from '@ngrx/store';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order],
      providers: [provideStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show form with two inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement

    const form = compiled.querySelector('form[data-test="order-form"]')
    expect(form).toBeTruthy()

    const fields = compiled.querySelectorAll('form > mat-form-field input[matinput]')
    expect(fields).toHaveLength(2)

    expect(compiled.querySelector('input[data-test="order-form-name"]')).toBeTruthy()
    expect(compiled.querySelector('input[data-test="order-form-tel"]')).toBeTruthy()
  })
});
