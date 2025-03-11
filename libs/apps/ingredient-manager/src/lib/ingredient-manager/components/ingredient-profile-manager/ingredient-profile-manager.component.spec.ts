import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientProfileManagerComponent } from './ingredient-profile-manager.component';

describe('IngredientProfileManagerComponent', () => {
  let component: IngredientProfileManagerComponent;
  let fixture: ComponentFixture<IngredientProfileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientProfileManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientProfileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
