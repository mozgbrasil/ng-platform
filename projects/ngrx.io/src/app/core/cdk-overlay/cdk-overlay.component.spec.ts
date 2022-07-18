import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkOverlayComponent } from './cdk-overlay.component';

describe('CdkOverlayComponent', () => {
  let component: CdkOverlayComponent;
  let fixture: ComponentFixture<CdkOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdkOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CdkOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
