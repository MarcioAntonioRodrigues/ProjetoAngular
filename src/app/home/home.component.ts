import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit
{
	bestMovies:any = [];
	actionMovies: any = [];
	bestEvents:any = [];
	tituloAcao = "EM CARTAZ";
	tituloDestaques = "EM ALTA";
	showMenuFooter: boolean;

	constructor(private eventsService:EventsService, private router: Router)
	{
		
	}

	ngOnInit(): void 
	{
		this.eventsService.getMoviesListByCategory("destaques");
		this.eventsService.getMoviesListByCategory("acao");
		this.bestMovies = this.eventsService.bestJsonList;
		this.actionMovies = this.eventsService.actionJsonList;
		this.bestEvents = this.eventsService.bestEvents;
	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}
	
}
