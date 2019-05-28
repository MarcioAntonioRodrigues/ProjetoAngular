import { Injectable} from '@angular/core';

@Injectable()
export class EventsService 
{
    mostSearch:any = [];
	newEvents: any = [];
	bestEvents:any = [];
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
        ];
        this.newEvents = [
            { img: 'assets/img/show-1.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-2.jpg', dia: '23', mes: 'maio', hora:'22:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-3.jpg', dia: '23', mes: 'maio', hora:'21:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-4.jpg', dia: '23', mes: 'maio', hora:'19:30', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-5.jpg', dia: '23', mes: 'maio', hora:'23:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-6.jpg', dia: '23', mes: 'maio', hora:'00:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-7.jpg', dia: '23', mes: 'maio', hora:'18:00', titulo: 'Rock in Rio' },
            { img: 'assets/img/show-8.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Rock in Rio' }
		];
		this.bestEvents = [
			{ img:'assets/img/destaque-1.jpg', dia: '19', mes:'JAN', titulo:'FESTIVAL DE HEAVY METAL RIO DE JANEIRO 2019', local:'CITY BANK HALL'},
			{ img:'assets/img/destaque-1.jpg', dia: '02', mes:'JAN', titulo:'SHOW LOS HERMANOS', local:'GARDEN HALL'},
			{ img:'assets/img/destaque-1.jpg', dia: '16', mes:'MAR', titulo:'BABILÔNIA FEIRA HYPE', local:'VIVO RIO'},
			{ img:'assets/img/destaque-1.jpg', dia: '25', mes:'JUN', titulo:'SHELL OPEN AIR', local:'MARINA DA GLÓRIA'},
			{ img:'assets/img/destaque-1.jpg', dia: '11', mes:'AGO', titulo:'FESTROBIER EDIÇÃO ESPECIAL', local:'CITY BANK HALL'}
		]
    }
}
