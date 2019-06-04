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
    pecas: any = [];
    filmes: any = [];
    eventsService: EventsService;
    purchase: any;
    view = 0;
    
    constructor(eventsService:EventsService, 
                private route: ActivatedRoute,
                private sessionService: SessionService)
    {
        this.filmes = eventsService.filmes;
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
}