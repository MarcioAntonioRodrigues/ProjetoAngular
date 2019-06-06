import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit
{
    view = 0;
    purchase: any;
    pecas: any = [];
    filmes: any = [];
	eventsService: EventsService;
	inteira = 0;
	kmVtg = 0;
	meia = 0;
	selectInteira = 0;
	selectMeia = 0;
	selectVantagem = 0;
	total = 0;
    
    constructor(eventsService:EventsService, 
                private route: ActivatedRoute,
                private sessionService: SessionService)
    {
        this.filmes = eventsService.jsonList;
		this.pecas = eventsService.pecas;
    }

    ngOnInit()
    {
        this.purchase = this.sessionService.getPurchase();
    }

    changeView(val)
    {
        this.view = val;
	}
	
	calcTicket()
	{
		let vtg = 12;
		let halph = 14;
		this.total = 0;
		let entire = 28;
		halph *= this.selectMeia;
		vtg *= this.selectVantagem;
		entire *= this.selectInteira;
		this.inteira = entire;
		this.meia = halph;
		this.kmVtg = vtg;
		this.total = this.inteira + this.meia + this.kmVtg;
		console.log(this.total);
	}
}