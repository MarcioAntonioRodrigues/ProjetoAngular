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
	bestMovies:any = [];
	actionMovies: any = [];
	bestEvents:any = [];
	tituloAcao = "Em breve";
	tituloDestaques = "Mais buscados";
	showMenuFooter: boolean;

	constructor(private eventsService:EventsService, private router: Router)
	{
		this.eventsService.getMoviesListByCategory("destaques");
		this.eventsService.getMoviesListByCategory("acao");
		this.bestMovies = eventsService.bestJsonList;
		this.actionMovies = eventsService.actionJsonList;
		this.bestEvents = eventsService.bestEvents;
	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}
	
}
