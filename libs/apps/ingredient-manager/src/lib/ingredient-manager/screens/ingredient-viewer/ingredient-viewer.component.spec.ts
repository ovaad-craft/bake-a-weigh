import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientViewerComponent } from './ingredient-viewer.component';

describe('IngredientViewerComponent', () => {
  let component: IngredientViewerComponent;
  let fixture: ComponentFixture<IngredientViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
