import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyProductComponent } from './familyproduct.component';

describe('FamilyProductComponent', () => {
  let component: FamilyProductComponent;
  let fixture: ComponentFixture<FamilyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
