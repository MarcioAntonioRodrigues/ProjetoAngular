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
	moviesList = ["batman", "the avengers", 'super man', 'aladdin', 'captain marvel', 'What Men Want', 'Serenity', 'Happy Death Day 2U'];
	jsonList = [];

	constructor(private eventsService:EventsService, private router: Router)
	{
		this.filmes = eventsService.jsonList;
		this.pecas = eventsService.jsonList;
		this.bestEvents = eventsService.bestEvents;
		this.eventsService.getMoviesList();
		console.log('lista json', this.eventsService.jsonList)

	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}
	
}
