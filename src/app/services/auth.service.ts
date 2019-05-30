import { Injectable} from '@angular/core';
import { Usuario } from '../login/Usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService 
{
   
	constructor(private router: Router){}

	login(usuario: Usuario)
	{
		console.log(usuario)
        if(usuario.nome == 'marcio.admin' && usuario.senha == '12345')
        {
            return this.router.navigate(['/home']);
        }
	}
	
}
