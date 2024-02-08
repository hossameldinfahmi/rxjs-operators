import { Component } from '@angular/core';
import { asyncScheduler, fromEvent, interval, map, switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {

  }
}
