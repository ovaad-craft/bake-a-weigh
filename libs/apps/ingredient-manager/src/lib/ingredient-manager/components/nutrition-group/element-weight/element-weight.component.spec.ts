import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementWeightComponent } from './element-weight.component';

describe('ElementWeightComponent', () => {
  let component: ElementWeightComponent;
  let fixture: ComponentFixture<ElementWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementWeightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
