import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService 
{
    private authUser: boolean = false;
    showMenuFooterEmitter = new EventEmitter<boolean>();
	constructor(private router: Router){}

	login(usuario: Usuario)
	{
        if(usuario.nome == 'marcio' && usuario.senha == '12345')
        {
            this.authUser = true; 
            this.showMenuFooterEmitter.emit(true);
            this.router.navigate(['/home']);
        }
        else
        {
            this.authUser = false;
            this.showMenuFooterEmitter.emit(false);
        }
	}
	
}
