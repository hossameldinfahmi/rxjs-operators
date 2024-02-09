import { Component } from '@angular/core';
import {
  EMPTY,
  NEVER,
  asyncScheduler,
  catchError,
  fromEvent,
  interval,
  map,
  switchMap,
  throttleTime,
  Observable,
  of,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {
  }
}
