import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SyrupProfileGeneratorComponent } from './syrup-profile-generator.component';

describe('SyrupProfileGeneratorComponent', () => {
  let component: SyrupProfileGeneratorComponent;
  let fixture: ComponentFixture<SyrupProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyrupProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SyrupProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
