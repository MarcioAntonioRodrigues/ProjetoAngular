import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import 'hammerjs';

import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { DetailComponent } from './detail/detail.component';
import { SessionService } from './services/session.service';
import { PurchaseComponent } from './purchase/purchase.component';
import { DialogComponent } from './purchase/dialog.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	LoginComponent,
	HeaderComponent,
	DetailComponent,
	FooterComponent,
	PurchaseComponent,
	CategoryComponent,
	CarousselComponent,
	SearchComponent,
	DialogComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatInputModule,
	FormsModule,
	HttpModule,
	MatDialogModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
	AuthService,
	EventsService,
	SessionService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
