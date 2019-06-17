import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

export interface DialogData {
	animal: string;
	name: string;
  }

@Component({
  selector: 'app-dialog',
  template: `<h1 mat-dialog-title>{{data.name}}</h1>
  <div mat-dialog-content>
	<p>Sua compra foi realizada com sucesso!</p>
	<p>Ingressos comprados:</p>
	<p *ngIf='data.totalInteira > 0'>{{data.totalInteira}} X Inteira: {{data.inteira}} reais</p>
	<p *ngIf='data.totalMeia > 0'>{{data.totalMeia}} X Meia: {{data.meia}} reais</p>
	<p *ngIf='data.totalKmVtg > 0'>{{data.totalKmVtg}} X Km Vantagens Ipiranga: RS{{data.kmVtg}} reais</p>
	<p>Total da compra: {{data.total}} reais</p>
  </div>
  <div mat-dialog-actions>
	<!-- <button mat-button (click)="onNoClick()">No Thanks</button> -->
	<button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
  </div>` 
})

export class DialogComponent 
{
	animal: string;
  	name: string;

	  constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
	
	  onNoClick(): void {
		this.dialogRef.close();
	  }
}