import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillMediwellSurveyComponent } from './fill-mediwell-survey.component';

describe('FillMediwellSurveyComponent', () => {
  let component: FillMediwellSurveyComponent;
  let fixture: ComponentFixture<FillMediwellSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillMediwellSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillMediwellSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
