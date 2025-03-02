import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtractProfileGeneratorComponent } from './extract-profile-generator.component';

describe('ExtractProfileGeneratorComponent', () => {
  let component: ExtractProfileGeneratorComponent;
  let fixture: ComponentFixture<ExtractProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtractProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
