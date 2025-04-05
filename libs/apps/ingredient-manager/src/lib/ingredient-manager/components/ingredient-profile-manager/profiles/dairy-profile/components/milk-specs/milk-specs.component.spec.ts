import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkSpecsComponent } from './milk-specs.component';

describe('MilkSpecsComponent', () => {
  let component: MilkSpecsComponent;
  let fixture: ComponentFixture<MilkSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilkSpecsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MilkSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
