import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent 
{
	filmes:any = [];
	pecas: any = [];
	bestEvents:any = [];
	tituloPecas = "Teatro";
	tituloFilmes = "Cinema";
	showMenuFooter: boolean;

	constructor(eventsService:EventsService, private router: Router)
	{
		this.filmes = eventsService.filmes;
		this.pecas = eventsService.pecas;
		this.bestEvents = eventsService.bestEvents;
	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}
}
