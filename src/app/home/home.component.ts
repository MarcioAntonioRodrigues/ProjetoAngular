import { Component, Input } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent 
{
	bigPoster = ['assets/img/batman.png', 'assets/img/avengers.png', 'assets/img/shazam.png'];
	caroussels = document.getElementsByClassName('image-caroussel');
	destakImage = document.getElementsByClassName('image-destak');
	time: number = 6000;
	bigPosterindex = 0;
	showMenuFooter: boolean;

	constructor()
	{ 
	}

	ngOnInit()
	{
		this.caroussel(this.caroussels, 244, 'inner', 6000);
		this.caroussel(this.destakImage, 987, 'destakInner', 5000);
	}
    
    automaticChange()
    {
		// document.getElementById('bigPoster').setAttribute('src', this.bigPoster[this.bigPosterindex]);
		// document.getElementById('backgroundFigure').style.backgroundImage = "url(" + this.bigPoster[this.bigPosterindex] + ")";
		// document.getElementById('backgroundFigure').style.backgroundSize = "cover";

        if(this.bigPosterindex < this.bigPoster.length - 1)
        {
            this.bigPosterindex++;
        }
        else
        {
            this.bigPosterindex = 0;
        }
        setTimeout(() => {
            this.automaticChange(); 
        }, this.time);
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
		this.automaticChange();
	}
}
