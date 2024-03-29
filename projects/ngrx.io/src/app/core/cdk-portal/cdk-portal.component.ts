import {
  ComponentPortal,
  DomPortal,
  Portal,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';

/**
 * @title Portal overview
 */
@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.scss'],
})
export class CdkPortalComponent implements AfterViewInit {
  @ViewChild('templatePortalContent')
  templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent')
  domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal',
})
export class ComponentPortalExample {}
