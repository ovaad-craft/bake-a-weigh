import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduceProfileGeneratorComponent } from './produce-profile-generator.component';

describe('ProduceProfileGeneratorComponent', () => {
  let component: ProduceProfileGeneratorComponent;
  let fixture: ComponentFixture<ProduceProfileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduceProfileGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduceProfileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
