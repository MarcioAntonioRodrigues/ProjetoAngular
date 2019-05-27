import { Injectable} from '@angular/core';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService 
{
   
	constructor(private router: Router){}

	login(usuario: Usuario)
	{
		console.log(usuario)
        if(usuario.nome == 'luciana.admin' && usuario.senha == 'bliveti')
        {
            this.router.navigate(['/home']);
        }
	}
	
}
