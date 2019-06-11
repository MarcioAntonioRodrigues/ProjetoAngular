import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit
{
	moviesList = [];
	searchName = '';
	searchList = [];

	constructor(private eventsService: EventsService, private route: ActivatedRoute,  private router: Router)
	{
	}

	ngOnInit()
	{
		this.eventsService.getMoviesListByCategory("destaques");
		this.eventsService.getMoviesListByCategory("acao");
		this.moviesList = this.eventsService.actionJsonList;
		this.route.params.subscribe((obj)=>
		{
			this.searchName = obj.busca;
			setTimeout(() => {
				this.searchMovie(this.searchName);
			}, 100);
		});
	}

	searchMovie(search)
	{
		this.searchList = [];
		this.moviesList.forEach(movie=>
		{
			if(movie.title.toLowerCase().includes(search.toLowerCase()))
			{
				this.searchList.push(movie);
			}
			else
			{
				console.log("Não achou")
			}
		})
	}

	goToEvent(evento)
	{
		this.router.navigate(['/detalhes'], 
		{queryParams: evento});
	}
}