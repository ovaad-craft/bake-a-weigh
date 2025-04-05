import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButterSpecsComponent } from './butter-specs.component';

describe('ButterSpecsComponent', () => {
  let component: ButterSpecsComponent;
  let fixture: ComponentFixture<ButterSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButterSpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButterSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
