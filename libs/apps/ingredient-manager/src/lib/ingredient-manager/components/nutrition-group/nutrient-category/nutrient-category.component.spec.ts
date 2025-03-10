import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutrientCategoryComponent } from './nutrient-category.component';

describe('NutrientCategoryComponent', () => {
  let component: NutrientCategoryComponent;
  let fixture: ComponentFixture<NutrientCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutrientCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
