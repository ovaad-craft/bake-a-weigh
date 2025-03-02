import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerbProfileGeneratorComponent } from './herb-profile-generator.component';

describe('HerbProfileGeneratorComponent', () => {
  let component: HerbProfileGeneratorComponent;
  let fixture: ComponentFixture<HerbProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HerbProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
