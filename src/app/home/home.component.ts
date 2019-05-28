import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent 
{
	mostSearch:any = [];
	newEvents: any = [];
	bestEvents:any = [];
	titleMostSearch = "Mais buscados"
	titleNewEvents = "Novidades para você";
	showMenuFooter: boolean;

	constructor(eventsService:EventsService)
	{
		this.mostSearch = eventsService.mostSearch;
		this.newEvents = eventsService.newEvents;
		this.bestEvents = eventsService.bestEvents;
	}
}
