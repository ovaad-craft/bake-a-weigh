import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlourProfileComponent } from './flour-profile.component';

describe('FlourProfileComponent', () => {
  let component: FlourProfileComponent;
  let fixture: ComponentFixture<FlourProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlourProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
