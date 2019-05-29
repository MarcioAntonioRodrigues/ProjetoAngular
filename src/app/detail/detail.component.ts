import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit
{
	filmes:any = [];
	pecas: any = [];
	evento: any;
	eventsService:EventsService;

	constructor(eventsService:EventsService, private route: ActivatedRoute)
	{
		this.filmes = eventsService.filmes;
		this.pecas = eventsService.pecas;
	}

	ngOnInit(): void 
	{
		this.evento = this.route.queryParamMap;
		this.evento = this.evento.source._value;
		console.log(this.evento)
	}

	getEvent()
	{

	}

}