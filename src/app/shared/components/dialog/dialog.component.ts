import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
imports: [
    MatDialogModule,

    MatIconModule,
    CommonModule,
    RouterModule,


  ],  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  view: any;
  message: string = '';
  text: string = '';
  link: string = '';
  image: any;
  seoTitle: string = '';
  seoDes: string = '';
  slug: string = '';
  body: string = '';
  note: string = '';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  isLoading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComponent>,
    private router: Router,

  ) {
    this.isLoading = true;
    if (data) {
      if (data.view == 'data') {
        this.isLoading = true;
      }
      this.view = data.view;
      this.text = data.text || this.text;
      this.message = data.message || this.message;
      this.note = data.note || this.note;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }

  }
}
