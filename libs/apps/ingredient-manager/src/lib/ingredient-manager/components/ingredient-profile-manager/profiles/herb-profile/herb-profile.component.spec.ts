import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerbProfileComponent } from './herb-profile.component';

describe('HerbProfileComponent', () => {
  let component: HerbProfileComponent;
  let fixture: ComponentFixture<HerbProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HerbProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
