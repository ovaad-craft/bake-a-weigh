import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientGeneratorComponent } from './ingredient-generator.component';

describe('IngredientGeneratorComponent', () => {
  let component: IngredientGeneratorComponent;
  let fixture: ComponentFixture<IngredientGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
