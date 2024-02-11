import { Component, ElementRef, OnInit } from '@angular/core';
import { interval, map, pluck, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
  ngOnInit(): void {
    interval(1000).subscribe((x) => console.log(x));

    const cities = ['cairo', 'rome', 'paris'];

    const filteredCities = (value: string) => cities.filter((city) => city.includes(value));

    const input = document.querySelector('input');
    const suggestions = document.querySelector('#suggestions');

    if (input && suggestions) {
      fromEvent<any>(input, 'keyup')
        .pipe(
          pluck('target', 'value'),
          debounceTime<string>(1000),
          map((value: string) => {
            console.log(value);
            return filteredCities(value);
          }),
          map((filteredCities: string[]) =>
            filteredCities.map((city) => `<li>${city}</li>`).join('')
          )
        )
        .subscribe((html) => (suggestions.innerHTML = html));
    }
  }
}
