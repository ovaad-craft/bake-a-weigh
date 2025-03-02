import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrainProfileGeneratorComponent } from './grain-profile-generator.component';

describe('GrainProfileGeneratorComponent', () => {
  let component: GrainProfileGeneratorComponent;
  let fixture: ComponentFixture<GrainProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrainProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
