import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutrientTrackerComponent } from './nutrient-tracker.component';

describe('NutrientTrackerComponent', () => {
  let component: NutrientTrackerComponent;
  let fixture: ComponentFixture<NutrientTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutrientTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
