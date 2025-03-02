import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarProfileGeneratorComponent } from './sugar-profile-generator.component';

describe('SugarProfileGeneratorComponent', () => {
  let component: SugarProfileGeneratorComponent;
  let fixture: ComponentFixture<SugarProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SugarProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
