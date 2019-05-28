import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})

export class DetailComponent
{
	mostSearch:any = [];
	newEvents: any = [];
	constructor(eventsService:EventsService)
	{
		this.mostSearch = eventsService.mostSearch;
		this.newEvents = eventsService.newEvents;
	}
}