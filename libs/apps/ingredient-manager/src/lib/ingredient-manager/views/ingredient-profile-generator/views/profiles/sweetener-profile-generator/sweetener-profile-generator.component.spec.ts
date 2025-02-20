import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweetenerProfileGeneratorComponent } from './sweetener-profile-generator.component';

describe('SweetenerProfileGeneratorComponent', () => {
  let component: SweetenerProfileGeneratorComponent;
  let fixture: ComponentFixture<SweetenerProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetenerProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SweetenerProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
