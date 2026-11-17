import { Service, signal } from '@angular/core';

@Service()
export class OrderService {
    public name = signal('');
    public tel = signal('');
}
