import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientProfileGeneratorComponent } from './ingredient-profile-generator.component';

describe('IngredientGeneratorComponent', () => {
  let component: IngredientProfileGeneratorComponent;
  let fixture: ComponentFixture<IngredientProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
