import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeedProfileComponent } from './seed-profile.component';

describe('SeedProfileComponent', () => {
  let component: SeedProfileComponent;
  let fixture: ComponentFixture<SeedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
