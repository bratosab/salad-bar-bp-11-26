import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppUpdate } from './services/app-update';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('salad-bar');

  example = "Salut"

  constructor(protected appUpdate: AppUpdate){}
}
