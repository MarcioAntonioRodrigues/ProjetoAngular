import { Component } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent 
{
	bigPoster = ['images/batman.png', 'images/avengers.png', 'images/shazam.png'];
	caroussels = document.getElementsByClassName('image-caroussel');
	time: number = 6000;
	bigPosterindex = 0;

	constructor()
	{ }

	ngOnInit()
	{
		[].forEach.call(this.caroussels, function(c)
		{
			let next = c.getElementsByClassName('next')[0],
				prev = c.getElementsByClassName('prev')[0],
				bubbles = c.getElementsByClassName('bubbles')[0],
				inner = c.getElementsByClassName('inner')[0],
				imgs = c.getElementsByTagName('img')[0],
				currentImagenIndex = 0,
				width = 244,
				imgsArrayWidth = 4;

				function switchImg()
				{
					inner.style.left = -width * currentImagenIndex + 'px';
				}

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
    
    automaticChange()
    {
        $('#bigPoster').attr('src', this.bigPoster[this.bigPosterindex]);
        $('#backgroundFigure').css({'backgroundImage': "url(" + this.bigPoster[this.bigPosterindex] + ")", "backgroundSize":"cover"});

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
}
