import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {PrimeNG} from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'asso-sqf-front';

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
