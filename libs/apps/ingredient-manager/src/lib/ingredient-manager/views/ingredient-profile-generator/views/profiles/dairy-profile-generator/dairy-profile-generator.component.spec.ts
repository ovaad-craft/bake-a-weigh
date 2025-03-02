import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DairyProfileGeneratorComponent } from './dairy-profile-generator.component';

describe('DairyProfileGeneratorComponent', () => {
  let component: DairyProfileGeneratorComponent;
  let fixture: ComponentFixture<DairyProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DairyProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
