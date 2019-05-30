import { Injectable } from "@angular/core";
import { Usuario } from '../login/Usuario';

@Injectable()
export class SessionService 
{
	sessionKeys: any = 
	{
		userName: "usuarioNome"
	}

	public setUser(usuario: Usuario)
	{
		sessionStorage.setItem(this.sessionKeys.userName, usuario.nome);
	}

	public clearSession(): void 
	{
		sessionStorage.clear();
	}

	public getUserName(): string {
		return sessionStorage.getItem(this.sessionKeys.userName);
	}
}