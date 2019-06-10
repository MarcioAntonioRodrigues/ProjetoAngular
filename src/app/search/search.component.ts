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
	searchMovies = [];

	constructor(private eventsService: EventsService, private route: ActivatedRoute)
	{

	}

	ngOnInit()
	{
		this.route.params.subscribe((obj)=>
		{
			this.categoria = obj.categoria;
			this.eventsService.getMoviesListByCategory(this.categoria);
			this.bestMovies = this.eventsService.bestJsonList;
			this.actionMovies = this.eventsService.actionJsonList;
			this.getCategoria();
		});
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

}