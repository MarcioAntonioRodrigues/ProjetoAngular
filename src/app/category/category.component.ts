import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit
{
	
	filmes:any = [];
	pecas: any = [];
	titulo = "";
	categoria: any;
	listaCategoria = [];
	eventsService:EventsService;

	constructor(eventsService:EventsService, private route: ActivatedRoute)
	{
		this.filmes = eventsService.filmes;
		this.pecas = eventsService.pecas;
	}

	ngOnInit(): void 
	{
		this.route.params.subscribe((obj)=>{
			this.categoria = obj.categoria;
		});
		this.getCategoria();

	}

	getCategoria()
	{
		if(this.categoria == 'cinema')
		{
			this.listaCategoria = this.filmes;
			this.titulo = "Cinema";
		}
		if(this.categoria == 'teatro')
		{
			this.listaCategoria = this.pecas;
			this.titulo = "Teatro";
		}
	}
}