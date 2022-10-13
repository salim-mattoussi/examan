import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultStageComponent } from './consult-stage.component';

describe('ConsultStageComponent', () => {
  let component: ConsultStageComponent;
  let fixture: ComponentFixture<ConsultStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
