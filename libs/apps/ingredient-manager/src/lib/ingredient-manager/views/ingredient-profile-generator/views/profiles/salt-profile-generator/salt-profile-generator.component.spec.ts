import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaltProfileGeneratorComponent } from './salt-profile-generator.component';

describe('SaltProfileGeneratorComponent', () => {
  let component: SaltProfileGeneratorComponent;
  let fixture: ComponentFixture<SaltProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaltProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaltProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
