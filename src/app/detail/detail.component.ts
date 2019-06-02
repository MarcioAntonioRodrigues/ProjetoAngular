import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { PurchaseService } from '../services/purchase.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit
{
	evento: any;
	locais = [];
	weekDay = [];
	pecas: any = [];
	filmes: any = [];
	chosenDay = 0;
	eventsService: EventsService;

	constructor(eventsService:EventsService, 
				private route: ActivatedRoute,
				private router: Router,
				private location: Location,
				private purchaseService: PurchaseService)
	{
		this.filmes = eventsService.filmes;
		this.pecas = eventsService.pecas;
		this.weekDay = [
			'DOM',
			'SEG',
			'TER',
			'QUA',
			'QUI',
			'SEX',
			'SAB'
		]
		this.getLocales();
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

	getLocales()
	{
		this.evento = this.route.queryParamMap;
		this.evento = this.evento.source._value;
		this.filmes.forEach(element => {
			if(element.id == this.evento.id)
			{
				element.local.forEach(local=>{
					this.locais.push(local)
				})
			}
		});
	}

	goToPurchase(evento, local, hora)
	{
		this.purchaseService.setPurchase(evento, local, hora);
		this.router.navigate(['/compra']);
	}
}