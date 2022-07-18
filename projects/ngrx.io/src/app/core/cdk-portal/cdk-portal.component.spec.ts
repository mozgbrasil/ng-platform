import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPortalComponent } from './cdk-portal.component';

describe('CdkPortalComponent', () => {
  let component: CdkPortalComponent;
  let fixture: ComponentFixture<CdkPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
