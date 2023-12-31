import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/Material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './PrimeNg/primeNg';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { MaterialSearchComponent } from './material-search/material-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MaterialSearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    PrimeNGModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
