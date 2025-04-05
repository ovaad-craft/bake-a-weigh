import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarInfoComponent } from './sugar-info.component';

describe('SugarInfoComponent', () => {
  let component: SugarInfoComponent;
  let fixture: ComponentFixture<SugarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SugarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
