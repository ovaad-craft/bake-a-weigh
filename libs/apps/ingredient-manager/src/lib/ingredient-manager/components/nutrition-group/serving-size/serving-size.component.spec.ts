import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServingSizeComponent } from './serving-size.component';

describe('ServingSizeComponent', () => {
  let component: ServingSizeComponent;
  let fixture: ComponentFixture<ServingSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServingSizeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
