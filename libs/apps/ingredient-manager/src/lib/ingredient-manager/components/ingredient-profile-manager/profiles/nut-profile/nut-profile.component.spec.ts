import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutProfileComponent } from './nut-profile.component';

describe('NutProfileComponent', () => {
  let component: NutProfileComponent;
  let fixture: ComponentFixture<NutProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
