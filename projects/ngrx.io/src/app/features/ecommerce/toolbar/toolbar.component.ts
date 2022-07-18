import {
  Directive,
  Input,
  Component,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Directive({ selector: 'pane' })
export class Pane {
  @Input()
  id!: string;
}

/**
 * @title Dialog Animations
 */
// @Component({
//   selector: 'ecommerce-toolbar',
//   template: `
//     <pane id="1" *ngIf="shouldShow"></pane>
//     <pane id="2" *ngIf="!shouldShow"></pane>
//     <button (click)="toggle()">Toggle</button>
//     <div>Selected: {{ selectedPane }}</div>
//   `,
// })
@Component({
  selector: 'ecommerce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) {}

  // @ViewChild(Pane)
  // set pane(v: Pane) {
  //   setTimeout(() => {
  //     this.selectedPane = v.id;
  //   }, 0);
  // }
  // selectedPane: string = '';
  // shouldShow = true;
  // toggle() {
  //   this.shouldShow = !this.shouldShow;
  // }

  // openDialog(
  //   enterAnimationDuration: string,
  //   exitAnimationDuration: string
  // ): void {
  //   this.dialog.open(DialogAnimations, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
}

// @Component({
//   selector: 'dialog-animations',
//   templateUrl: '../../../core/debug/debug.component.html',
//   // template: `
//   //   <style>
//   //     h1 {
//   //       color: red;
//   //     }
//   //   </style>
//   //   <h1>Debug</h1>
//   //   <mat-card> ss </mat-card>
//   // `,
// })
// export class DialogAnimations {
//   elementOrigin = this.formatOrigin(null);
//   subtreeOrigin = this.formatOrigin(null);

//   constructor(
//     public dialogRef: MatDialogRef<DialogAnimations>,
//     private _ngZone: NgZone,
//     private _cdr: ChangeDetectorRef
//   ) {}

//   getValue(event: Event): string {
//     console.log('event: ', event);
//     return (event.target as HTMLInputElement).value;
//   }

//   formatOrigin(origin: FocusOrigin): string {
//     return origin ? origin + ' focused' : 'blurred';
//   }

//   // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
//   markForCheck() {
//     this._ngZone.run(() => this._cdr.markForCheck());
//   }
// }
