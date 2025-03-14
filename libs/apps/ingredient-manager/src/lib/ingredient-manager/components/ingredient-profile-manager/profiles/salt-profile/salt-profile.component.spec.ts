import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaltProfileComponent } from './salt-profile.component';

describe('SaltProfileComponent', () => {
  let component: SaltProfileComponent;
  let fixture: ComponentFixture<SaltProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaltProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaltProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
