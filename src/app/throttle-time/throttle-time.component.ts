import { Component } from '@angular/core';
import { asyncScheduler, fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss'],
})
export class ThrottleTimeComponent {
  ngOnInit() {
    const throttleTimeConfig = {
      leading: false,
      trailing: true,
    };
    const click = fromEvent(document, 'click');
    const result = click.pipe(
      map((event) => {
        console.log('click');
      }),
      throttleTime(2000, asyncScheduler, throttleTimeConfig)
    );

    result.subscribe((result) => {
      console.log('double clicked');
    });
  }
}
