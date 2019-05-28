import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent 
{
	mostSearch:any = [];
	newEvents: any = [];
	caroussels = document.getElementsByClassName('image-caroussel');
	destakImage = document.getElementsByClassName('image-destak');
	time: number = 6000;
	bigPosterindex = 0;
	showMenuFooter: boolean;

	constructor(eventsService:EventsService)
	{
		this.mostSearch = eventsService.mostSearch;
		this.newEvents = eventsService.newEvents;
	}

	ngOnInit()
	{
		this.caroussel(this.caroussels, 244, 'inner', 6000);
		this.caroussel(this.destakImage, 987, 'destakInner', 5000);
	}
	
	caroussel(caroussel, tam, className, time)
	{
		[].forEach.call(caroussel, function(c)
		{
			let next = c.getElementsByClassName('next')[0],
			prev = c.getElementsByClassName('prev')[0],
			bubbles = c.getElementsByClassName('bubbles')[0],
			inner = c.getElementsByClassName(className)[0],
			imgs = c.getElementsByTagName('img')[0],
			currentImagenIndex = 0,
			width = tam,
			destakWidth = 500,
			imgsArrayWidth = 4;

			function switchImg()
			{
				inner.style.left = -width * currentImagenIndex + 'px';
			}
			
			setInterval(() => {
				currentImagenIndex++;
				if(currentImagenIndex == 5)
				{
					currentImagenIndex = 0;
				}
				switchImg();
			}, time);

			next.addEventListener('click', function()
			{
				currentImagenIndex++;
				if(currentImagenIndex >= imgsArrayWidth)
				{
					currentImagenIndex = imgsArrayWidth;
				}
				switchImg();
			});

			prev.addEventListener('click', function()
			{
				currentImagenIndex--;
				if(currentImagenIndex < 0)
				{
					currentImagenIndex = 0;
				}
				switchImg();
			});
		});
	}
}
