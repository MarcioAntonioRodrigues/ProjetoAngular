import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

export interface DialogData {
	animal: string;
	name: string;
  }

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit
{
    view = 0;
	meia = 0;
	kmVtg = 0;
	total = 0;
	inteira = 0;
    purchase: any;
	selectMeia = 0;
	selectedCard:any;
	selectInteira = 0;
	selectVantagem = 0;
	creditCard = 
	{
		number: null,
		name: null,
		cvv: null,
		month: null,
		year: ""
	}
	animal: any;
	eventsService: EventsService;
	cardYear = ['Jan', 'Fev', 'Mar'];
    
    constructor(eventsService:EventsService, 
                private route: ActivatedRoute,
				private sessionService: SessionService,
				public dialog: MatDialog)
    {
		this.creditCard.year = "Ano";
    }

    ngOnInit()
    {
		this.purchase = this.sessionService.getPurchase();
		// this.creditCard.year = "Ano";
		console.log(this.creditCard.year)
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
		console.log(this.creditCard)
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
		  width: '550px',
		  data: {name: "nome:", animal: "Cahorro"}
		});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log('The dialog was closed');
		  this.animal = result;
		});
	  }

}