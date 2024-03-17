import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCareButtonsComponent } from './tech-care-buttons.component';

describe('TechCareButtonsComponent', () => {
  let component: TechCareButtonsComponent;
  let fixture: ComponentFixture<TechCareButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCareButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechCareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
