import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';

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
    
    constructor(eventsService:EventsService, 
                private route: ActivatedRoute,
                private purchaseService: PurchaseService)
    {
        this.filmes = eventsService.filmes;
		this.pecas = eventsService.pecas;
    }

    ngOnInit()
    {
        this.purchase = this.purchaseService.getPurchase();
        console.log('chegou',this.purchase);
    }
}