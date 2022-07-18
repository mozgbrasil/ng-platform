import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusMonitorDirectivesComponent } from './focus-monitor-directives.component';

describe('FocusMonitorDirectivesComponent', () => {
  let component: FocusMonitorDirectivesComponent;
  let fixture: ComponentFixture<FocusMonitorDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusMonitorDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusMonitorDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
