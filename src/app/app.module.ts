import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ThrottleTimeComponent,
    SwitchMapComponent,
    CatchErrorComponent,
    DebounceTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
