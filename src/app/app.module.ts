import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import 'hammerjs';

import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { DetailComponent } from './detail/detail.component';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	LoginComponent,
	HeaderComponent,
	FooterComponent,
	DetailComponent,
	CarousselComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		FormsModule
  ],
  providers: [
		AuthService,
		EventsService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
