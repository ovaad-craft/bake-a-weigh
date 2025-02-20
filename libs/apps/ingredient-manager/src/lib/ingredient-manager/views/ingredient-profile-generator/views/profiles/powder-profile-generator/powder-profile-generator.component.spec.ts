import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowderProfileGeneratorComponent } from './powder-profile-generator.component';

describe('PowderProfileGeneratorComponent', () => {
  let component: PowderProfileGeneratorComponent;
  let fixture: ComponentFixture<PowderProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowderProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PowderProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
