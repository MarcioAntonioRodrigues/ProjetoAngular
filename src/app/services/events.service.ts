import { Injectable} from '@angular/core';

@Injectable()
export class EventsService 
{
    mostSearch:any = [];
	newEvents: any = [];
    constructor()
    {
        this.mostSearch = [
            { img: 'assets/img/show-9.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-10.jpg', dia: '23', mes: 'maio', hora:'22:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-11.jpg', dia: '23', mes: 'maio', hora:'21:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-12.jpg', dia: '23', mes: 'maio', hora:'19:30', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-9.jpg', dia: '23', mes: 'maio', hora:'23:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-10.jpg', dia: '23', mes: 'maio', hora:'00:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-11.jpg', dia: '23', mes: 'maio', hora:'18:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-12.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' }
        ]
        this.newEvents = [
            { img: 'assets/img/show-1.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-2.jpg', dia: '23', mes: 'maio', hora:'22:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-3.jpg', dia: '23', mes: 'maio', hora:'21:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-4.jpg', dia: '23', mes: 'maio', hora:'19:30', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-5.jpg', dia: '23', mes: 'maio', hora:'23:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-6.jpg', dia: '23', mes: 'maio', hora:'00:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-7.jpg', dia: '23', mes: 'maio', hora:'18:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-8.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' }
        ]
    }
}
