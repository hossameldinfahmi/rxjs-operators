import { Component } from '@angular/core';
import { catchError, interval, map } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent {
  ngOnInit(): void {
    // Create an observable that emits values every second
    const observe$ = interval(1000).pipe(
      // Map each emitted value
      map((value) => {
        // Simulate an error after 3 seconds
        if (value > 3) {
          throw new Error(`Invalid`);
        } else {
          return value;
        }
      }),
      // Handle errors using catchError
      catchError((error, caught$) => {
        // ---- Uncomment and test one scenario at a time ----

        // // 1. Returning EMPTY to replace the error with an empty observable
        // // You can use EMPTY when you want to gracefully handle errors and continue the stream
        // // It will complete the observable without emitting any further values
        // return EMPTY;

        // // 2. Alternatively, you can return NEVER to keep the observable alive without emitting any further values
        // // This can be useful if you want to handle errors but keep the observable running indefinitely
        // return NEVER;

        // // 3. You can also return a new observable to replace the original one
        // // This can be useful for retrying or substituting the observable with different logic
        // return fromEvent(document, 'click').pipe(throttleTime(1000));

        // // 4. If you want to rethrow the error, you can do so by returning the error using 'of'
        // // This will propagate the error to the subscriber, and the observable will complete with an error
        // // This is commented out to show how other scenarios behave
        return caught$;
      })
    );

    // Subscribe to the observable
    observe$.subscribe(
      // Handle emitted values
      (value) => {
        console.log('Received value:', value);
      },
      // Handle errors from catchError
      (err) => {
        console.error('Error in subscription:', err);
      },
      // Handle completion of the observable
      () => {
        console.log('Observable completed');
      }
    );
  }
}
