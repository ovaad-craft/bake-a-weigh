import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientGeneratorScreenComponent } from './ingredient-generator-screen.component';

describe('IngredientGeneratorScreenComponent', () => {
  let component: IngredientGeneratorScreenComponent;
  let fixture: ComponentFixture<IngredientGeneratorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientGeneratorScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientGeneratorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
