import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

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

	constructor(eventsService:EventsService, 
				private route: ActivatedRoute,
				private location: Location)
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

	navigateBack()
	{
		this.location.back();
	}
}