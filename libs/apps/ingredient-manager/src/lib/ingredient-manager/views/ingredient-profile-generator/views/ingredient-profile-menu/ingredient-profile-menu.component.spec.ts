import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientProfileMenuComponent } from './ingredient-profile-menu.component';

describe('IngredientProfileMenuComponent', () => {
  let component: IngredientProfileMenuComponent;
  let fixture: ComponentFixture<IngredientProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientProfileMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
