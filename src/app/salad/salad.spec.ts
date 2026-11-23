import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Salad } from './salad';
import { provideStore } from '@ngrx/store';
import { appReducer } from '../store/app.reducer';
import { saladReducer } from './store/salad.reducer';

describe('Salad', () => {
  let component: Salad;
  let fixture: ComponentFixture<Salad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salad],
      providers: [provideStore({ app: appReducer, salad: saladReducer })],
    }).compileComponents();

    fixture = TestBed.createComponent(Salad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toppings component', () => {
    const compiled = fixture.nativeElement as HTMLElement

    expect(compiled.querySelectorAll('app-toppings')).toHaveLength(2)
  })

   it('should display total price message', () => {
    const compiled = fixture.nativeElement as HTMLElement

    const totalPrice = compiled.querySelector('p[data-test="total-price"]')
    expect(totalPrice).toBeTruthy()
    expect(totalPrice?.textContent).toContain("Total price :")
  })
});
