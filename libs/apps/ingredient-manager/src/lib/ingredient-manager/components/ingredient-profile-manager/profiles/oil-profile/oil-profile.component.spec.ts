import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OilProfileComponent } from './oil-profile.component';

describe('OilProfileComponent', () => {
  let component: OilProfileComponent;
  let fixture: ComponentFixture<OilProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OilProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
