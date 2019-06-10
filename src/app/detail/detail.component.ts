import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { SessionService } from '../services/session.service';

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
	chosenDay = 0;
	eventdate = new Date().toLocaleDateString();
	purchase: any = 
	{
		evento: {},
		local: {},
        hora: '',
        dia: ''
	}

	constructor(private eventsService:EventsService, 
				private route: ActivatedRoute,
				private router: Router,
				private location: Location,
				private sessionService: SessionService)
	{
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
		this.eventsService.locales.forEach(local=>
			{
				this.locais.push(local);
			})
	}

	// getLocales()
	// {
	// 	this.evento = this.route.queryParamMap;
	// 	this.evento = this.evento.source._value;
	// 	this.filmes.forEach(element => {
	// 		if(element.id == this.evento.id)
	// 		{
	// 			element.local.forEach(local=>{
	// 				this.locais.push(local)
	// 			})
	// 		}
	// 	});
	// }

	goToPurchase(evento, local, hora)
	{
		this.setPurchase(evento, local, hora, this.eventdate);
		this.router.navigate(['/compra']);
	}

	getEventDate(day, val)
	{
		this.chosenDay = val;
		this.eventdate = day;
	}

	setPurchase(evento, local, hora, dia)
    {
        this.purchase.dia = dia;
        this.purchase.hora = hora;
		this.purchase.local = local;
        this.purchase.evento = evento;
        this.sessionService.setPurchase(this.purchase);
    }
}