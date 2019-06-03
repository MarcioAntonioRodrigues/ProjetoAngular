import { Injectable } from "@angular/core";
import { Usuario } from '../login/Usuario';

@Injectable()
export class SessionService 
{
	purchase = {};

	sessionKeys: any = 
	{
		userName: "Usuario",
		compra: 'Compra'
	}

	public setUser(usuario: Usuario)
	{
		sessionStorage.setItem(this.sessionKeys.userName, usuario.nome);
	}

	public getUserName(): string {
		return sessionStorage.getItem(this.sessionKeys.userName);
	}

	public setPurchase(value)
	{
		this.purchase = value;
		sessionStorage.setItem(this.sessionKeys.compra, JSON.stringify(this.purchase));
	}

	public getPurchase(): string
	{
		let p = JSON.parse(sessionStorage.getItem(this.sessionKeys.compra));
		return p;
	}

	public clearSession(): void 
	{
		sessionStorage.clear();
	}
}