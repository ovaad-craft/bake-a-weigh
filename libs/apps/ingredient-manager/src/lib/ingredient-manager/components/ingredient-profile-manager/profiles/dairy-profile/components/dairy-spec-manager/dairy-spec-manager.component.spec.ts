import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DairySpecManagerComponent } from './dairy-spec-manager.component';

describe('DairySpecManagerComponent', () => {
  let component: DairySpecManagerComponent;
  let fixture: ComponentFixture<DairySpecManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairySpecManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DairySpecManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
