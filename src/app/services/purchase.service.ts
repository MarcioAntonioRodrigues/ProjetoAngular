import { Injectable} from '@angular/core';

@Injectable()
export class PurchaseService
{
    purchase: any = {
		evento:{},
		local:{},
		hora:''
	}

    constructor()
    {

    }

    setPurchase(evento, local, hora)
    {
        this.purchase = {};
        this.purchase.evento = evento;
		this.purchase.local = local;
        this.purchase.hora = hora;
    }

    getPurchase()
    {
        return this.purchase;
    }

}