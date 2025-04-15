import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalSugarsComponent } from './total-sugars.component';

describe('TotalSugarsComponent', () => {
  let component: TotalSugarsComponent;
  let fixture: ComponentFixture<TotalSugarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSugarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalSugarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
