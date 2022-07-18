import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EcommerceModule } from '../features/ecommerce/ecommerce.module';

import { DebugComponent } from './debug/debug.component';
import { FocusMonitorDirectivesComponent } from './focus-monitor-directives/focus-monitor-directives.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { CdkPlatformComponent } from './cdk-platform/cdk-platform.component';
import { BreakpointObserverComponent } from './breakpoint-observer/breakpoint-observer.component';

const components = [
  DebugComponent,
  FocusMonitorDirectivesComponent,
  BreakpointObserverComponent,
  CdkOverlayComponent,
  CdkPlatformComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule, EcommerceModule],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
