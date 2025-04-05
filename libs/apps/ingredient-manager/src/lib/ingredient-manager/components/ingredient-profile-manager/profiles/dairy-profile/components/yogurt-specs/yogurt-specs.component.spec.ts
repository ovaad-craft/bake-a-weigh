import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YogurtSpecsComponent } from './yogurt-specs.component';

describe('YogurtSpecsComponent', () => {
  let component: YogurtSpecsComponent;
  let fixture: ComponentFixture<YogurtSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogurtSpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YogurtSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
