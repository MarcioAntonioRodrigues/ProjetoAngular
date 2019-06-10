import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit
{
	username = '';

	constructor(private sessionService: SessionService, private router: Router){}

	ngOnInit(): void 
	{
		this.username = this.sessionService.getUserName();
	}

	logout()
	{
		this.sessionService.clearSession();
		return this.router.navigate(['/']);
	}

	goToEvent(categoria)
	{
		this.router.navigate(['/categorias', categoria]);
	}

}
