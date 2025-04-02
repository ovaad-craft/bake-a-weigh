import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightMeasurementGroupComponent } from './weight-measurement-group.component';

describe('WeightMeasurementGroupComponent', () => {
  let component: WeightMeasurementGroupComponent;
  let fixture: ComponentFixture<WeightMeasurementGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightMeasurementGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeightMeasurementGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
