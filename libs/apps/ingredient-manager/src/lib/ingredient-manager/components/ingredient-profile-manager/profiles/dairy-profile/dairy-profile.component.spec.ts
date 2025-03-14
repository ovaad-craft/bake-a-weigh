import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DairyProfileComponent } from './dairy-profile.component';

describe('DairyProfileComponent', () => {
  let component: DairyProfileComponent;
  let fixture: ComponentFixture<DairyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DairyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
