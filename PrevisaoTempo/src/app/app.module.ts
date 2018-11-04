import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempoComponent } from './tempo/tempo.component';
import { TempService } from './temp.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    TempoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
