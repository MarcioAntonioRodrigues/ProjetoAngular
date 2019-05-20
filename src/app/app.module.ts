import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import 'hammerjs';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	HeaderComponent,
	FooterComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
