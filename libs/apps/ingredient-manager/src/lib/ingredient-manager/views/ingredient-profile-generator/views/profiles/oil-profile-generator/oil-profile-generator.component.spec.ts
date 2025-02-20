import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OilProfileGeneratorComponent } from './oil-profile-generator.component';

describe('OilProfileGeneratorComponent', () => {
  let component: OilProfileGeneratorComponent;
  let fixture: ComponentFixture<OilProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OilProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
