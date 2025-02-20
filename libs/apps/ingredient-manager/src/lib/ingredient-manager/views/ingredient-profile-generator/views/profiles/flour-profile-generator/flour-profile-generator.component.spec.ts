import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlourProfileGeneratorComponent } from './flour-profile-generator.component';

describe('FlourProfileGeneratorComponent', () => {
  let component: FlourProfileGeneratorComponent;
  let fixture: ComponentFixture<FlourProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlourProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlourProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
