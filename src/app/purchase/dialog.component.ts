import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

export interface DialogData {
	animal: string;
	name: string;
  }

@Component({
  selector: 'app-dialog',
  template: 'dialog.component.html'
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