import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from './Usuario';
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
	private usuario: Usuario = new Usuario();

	constructor(private authService: AuthService, private sessionService: SessionService){}

	ngOnInit() {}

	login()
	{
		this.authService.login(this.usuario).then(
			loginResponse =>
			{
				this.sessionService.setUser(this.usuario);
				console.log(this.usuario);
			},
			error =>
			{

			}
		);
	}
	
}
