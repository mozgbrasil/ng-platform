import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPlatformComponent } from './cdk-platform.component';

describe('CdkPlatformComponent', () => {
  let component: CdkPlatformComponent;
  let fixture: ComponentFixture<CdkPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
