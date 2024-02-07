import { Component } from '@angular/core';
import { asyncScheduler, fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss'],
})
export class ThrottleTimeComponent {
  ngOnInit() {
    // Configuration for throttleTime, specifying leading and trailing behavior
    const throttleTimeConfig = {
      leading: false,
      trailing: true,
    };

    // Create an observable for click events on the document
    const click = fromEvent(document, 'click');

    // Apply the map operator to log a message for each click event
    // Apply the throttleTime operator to control the emission rate to once every 2000 milliseconds (2 seconds)
    // asyncScheduler is used for asynchronous scheduling
    const result = click.pipe(
      map((event) => {
        console.log('click');
      }),
      throttleTime(2000, asyncScheduler, throttleTimeConfig)
    );

    // Subscribe to the resulting observable after applying throttleTime
    // Log a message when a "double click" occurs (clicks within the specified time interval)
    result.subscribe((result) => {
      console.log('double clicked');
    });
  }
}
