import { TestBed } from '@angular/core/testing';
import { SaladService } from './salad.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { firstValueFrom } from 'rxjs';
import { Topping } from '../models/topping.model';

describe('SaladService', () => {
  let service: SaladService;
  let httpController: HttpTestingController;

  const toppingsMock: Topping[] = [
    { id: 0, name: 'Letus', price: 10 },
    { id: 1, name: 'Tomato', price: 80 },
    { id: 5, name: 'Bacon', price: 6 },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()]
    });
    service = TestBed.inject(SaladService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Toppings from API when getToppings() is called', async () => {
    const result = firstValueFrom(service.getToppings())
    
    const request = httpController.expectOne("https://retoolapi.dev/XDaOzA/toppings")
    expect(request.request.method).toBe('GET')
    request.flush(toppingsMock)

    expect(await result).toEqual(toppingsMock)

    httpController.verify()
  })
});
