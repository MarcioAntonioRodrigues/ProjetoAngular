import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import 'hammerjs';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	LoginComponent,
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
