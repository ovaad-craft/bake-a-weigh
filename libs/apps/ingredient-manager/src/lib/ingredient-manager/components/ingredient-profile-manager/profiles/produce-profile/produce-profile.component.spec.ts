import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduceProfileComponent } from './produce-profile.component';

describe('ProduceProfileComponent', () => {
  let component: ProduceProfileComponent;
  let fixture: ComponentFixture<ProduceProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduceProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
