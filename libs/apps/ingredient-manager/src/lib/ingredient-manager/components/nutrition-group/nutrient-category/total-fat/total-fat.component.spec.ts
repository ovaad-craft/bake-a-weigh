import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalFatComponent } from './total-fat.component';

describe('TotalFatComponent', () => {
  let component: TotalFatComponent;
  let fixture: ComponentFixture<TotalFatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalFatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
