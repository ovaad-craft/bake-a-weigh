import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalCarbohydratesGroupComponent } from './total-carbohydrates-group.component';

describe('TotalCarbohydratesGroupComponent', () => {
  let component: TotalCarbohydratesGroupComponent;
  let fixture: ComponentFixture<TotalCarbohydratesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCarbohydratesGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalCarbohydratesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
