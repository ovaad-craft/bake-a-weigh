import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarInfoGroupComponent } from './sugar-info-group.component';

describe('SugarInfoGroupComponent', () => {
  let component: SugarInfoGroupComponent;
  let fixture: ComponentFixture<SugarInfoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarInfoGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SugarInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
