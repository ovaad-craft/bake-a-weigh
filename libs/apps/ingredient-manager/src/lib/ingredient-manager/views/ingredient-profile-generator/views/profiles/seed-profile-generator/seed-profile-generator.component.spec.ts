import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeedProfileGeneratorComponent } from './seed-profile-generator.component';

describe('SeedProfileGeneratorComponent', () => {
  let component: SeedProfileGeneratorComponent;
  let fixture: ComponentFixture<SeedProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeedProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
