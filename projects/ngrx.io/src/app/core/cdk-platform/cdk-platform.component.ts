import { Component } from '@angular/core';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

/**
 * @title Platform overview
 */
@Component({
  selector: 'app-cdk-platform',
  templateUrl: './cdk-platform.component.html',
  styleUrls: ['./cdk-platform.component.scss'],
})
export class CdkPlatformComponent {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(public platform: Platform) {}
}
