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
		this.changeBackgrounImage();
		console.log(this.evento)
	}

	navigateBack()
	{
		this.location.back();
	}

	changeBackgrounImage()
	{
		let background = document.getElementById('img-event');
		console.log(background);
		background.style.backgroundImage = 'url(' + this.evento.imgBkg + ')';
		background.style.backgroundSize = 'cover';
		// background.style.filter = 'blur(5px)';
		background.style.width = '100%';
		background.style.height = '400px';
	}
}