import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutProfileGeneratorComponent } from './nut-profile-generator.component';

describe('NutProfileGeneratorComponent', () => {
  let component: NutProfileGeneratorComponent;
  let fixture: ComponentFixture<NutProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
