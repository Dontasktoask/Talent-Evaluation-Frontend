import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBarRef: MatSnackBarRef<ToastComponent>) {}
}
