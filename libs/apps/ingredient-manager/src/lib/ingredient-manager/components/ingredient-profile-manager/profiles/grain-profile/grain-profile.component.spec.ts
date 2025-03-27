import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrainProfileComponent } from './grain-profile.component';

describe('GrainProfileComponent', () => {
  let component: GrainProfileComponent;
  let fixture: ComponentFixture<GrainProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrainProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
