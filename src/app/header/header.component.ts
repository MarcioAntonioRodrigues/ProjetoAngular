import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit
{
	username = '';
	moviesList = [];
	searchName = '';
	searchList = [];

	constructor(private sessionService: SessionService, private router: Router, private eventsService: EventsService){}

	ngOnInit(): void 
	{
		this.username = this.sessionService.getUserName();
		this.eventsService.getMoviesListByCategory("destaques");
		this.eventsService.getMoviesListByCategory("acao");
		this.moviesList = this.eventsService.actionJsonList;
		console.log(this.moviesList)
	}

	logout()
	{
		this.sessionService.clearSession();
		return this.router.navigate(['/']);
	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}

	searchMovie(search)
	{
		this.moviesList.forEach(movie=>{
			if(movie.title.toLowerCase().includes(search.toLowerCase()))
			{
				this.searchList.push(movie);
				console.log(this.searchList);
			}
			else
			{
				console.log("Não achou")
			}
		})
	}

	goToSearchEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}

}
