import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutritionProfileGeneratorComponent } from './nutrition-profile-generator.component';

describe('NutritionProfileGeneratorComponent', () => {
  let component: NutritionProfileGeneratorComponent;
  let fixture: ComponentFixture<NutritionProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
