import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
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
	username = '';
	releasedView = false;
    
    constructor(eventsService:EventsService, 
                private route: ActivatedRoute,
				private sessionService: SessionService,
				public dialog: MatDialog,
				private router: Router)
    {
		this.creditCard.year = "Ano";
    }

    ngOnInit()
    {
		this.username = this.sessionService.getUserName();
		this.purchase = this.sessionService.getPurchase();
		// this.creditCard.year = "Ano";
		console.log(this.creditCard.year)
    }

    changeView(val)
    {
		console.log(this.selectInteira)
		if(this.selectInteira == 0 && this.selectMeia == 0 && this.selectVantagem == 0)
		{
			this.view = 0;
			this.releasedView = false;
		} 
		else
		{
			this.view = val;
			this.releasedView = true;
		}
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
		this.openDialog();
	}

	openDialog(): void {
			const dialogRef = this.dialog.open(DialogComponent, {
			width: '550px',
			data: {name: this.username, 
					meia: this.meia, totalMeia: this.selectMeia,
					inteira: this.inteira, totalInteira: this.selectInteira,
					kmVtg: this.kmVtg, totalKmVtg: this.selectVantagem,
					total: this.total}
		});
	
		dialogRef.afterClosed().subscribe(result => {
			this.router.navigate(['/home']);
			console.log('The dialog was closed');
			this.animal = result;
		});
	  }

}