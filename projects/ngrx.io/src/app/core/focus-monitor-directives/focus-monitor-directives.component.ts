import { FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

/** @title Monitoring focus with FocusMonitor */
@Component({
  selector: 'app-focus-monitor-directives',
  templateUrl: './focus-monitor-directives.component.html',
  styleUrls: ['./focus-monitor-directives.component.scss'],
})
export class FocusMonitorDirectivesComponent {
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(private _ngZone: NgZone, private _cdr: ChangeDetectorRef) {}

  getValue(event: Event): string {
    console.log('event: ', event);
    return (event.target as HTMLInputElement).value;
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
  markForCheck() {
    this._ngZone.run(() => this._cdr.markForCheck());
  }
}
