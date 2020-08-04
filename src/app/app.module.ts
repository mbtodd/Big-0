import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BigOService } from './big-o.service';
import { BigOComponent } from './big-o/big-o.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    BigOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BigOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
