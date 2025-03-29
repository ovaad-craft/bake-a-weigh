import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheeseSpecsComponent } from './cheese-specs.component';

describe('CheeseSpecsComponent', () => {
  let component: CheeseSpecsComponent;
  let fixture: ComponentFixture<CheeseSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheeseSpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheeseSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
