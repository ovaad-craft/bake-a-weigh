import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EggProfileGeneratorComponent } from './egg-profile-generator.component';

describe('EggProfileGeneratorComponent', () => {
  let component: EggProfileGeneratorComponent;
  let fixture: ComponentFixture<EggProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EggProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EggProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
