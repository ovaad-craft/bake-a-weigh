import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweetenerProfileComponent } from './sweetener-profile.component';

describe('SweetenerProfileComponent', () => {
  let component: SweetenerProfileComponent;
  let fixture: ComponentFixture<SweetenerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetenerProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SweetenerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
