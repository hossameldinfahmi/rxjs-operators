/**
 * SwitchMapComponent
 *
 * This Angular component demonstrates the usage of the switchMap operator from RxJS
 * to handle click events on the document. The switchMap operator is crucial in scenarios
 * where multiple events might be triggered in quick succession, such as multiple clicks.
 * It ensures that only the latest event is taken into account, preventing concurrency issues.
 *
 * - Click events are captured using the fromEvent operator from RxJS.
 * - The switchMap operator is applied to transform each click event into a new observable
 *   created by interval(1000), which emits sequential numbers every 1000 milliseconds.
 * - The subscribe method is used to log each emitted value to the console.
 *
 * This approach is particularly useful when dealing with asynchronous tasks triggered by
 * user interactions, allowing for efficient handling of events and preventing race conditions.
 *
 * For more information on RxJS and the switchMap operator, refer to the official documentation:
 * https://rxjs.dev/api/operators/switchMap
 */

import { Component } from '@angular/core';
import { fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent {
  ngOnInit(): void {
    // Create an observable to capture click events on the document
    const click$ = fromEvent(document, 'click');

    // Apply the switchMap operator to handle click events and switch to a new observable
    // The new observable, interval(1000), emits sequential numbers every 1000 milliseconds
    click$.pipe(switchMap(() => interval(1000))).subscribe((x) => console.log(x));
  }
}
