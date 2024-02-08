import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ThrottleTimeComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
