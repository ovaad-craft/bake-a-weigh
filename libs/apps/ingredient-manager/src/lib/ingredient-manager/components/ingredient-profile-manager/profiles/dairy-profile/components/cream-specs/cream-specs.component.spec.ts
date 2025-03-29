import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreamSpecsComponent } from './cream-specs.component';

describe('CreamSpecsComponent', () => {
  let component: CreamSpecsComponent;
  let fixture: ComponentFixture<CreamSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreamSpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreamSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
