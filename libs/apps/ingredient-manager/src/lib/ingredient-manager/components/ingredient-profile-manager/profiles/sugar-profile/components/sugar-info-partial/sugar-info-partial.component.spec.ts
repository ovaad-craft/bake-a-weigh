import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarInfoPartialComponent } from './sugar-info-partial.component';

describe('SugarInfoPartialComponent', () => {
  let component: SugarInfoPartialComponent;
  let fixture: ComponentFixture<SugarInfoPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarInfoPartialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SugarInfoPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
