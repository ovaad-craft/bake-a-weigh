import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BwElementsComponent } from './bw-elements.component';

describe('BwElementsComponent', () => {
  let component: BwElementsComponent;
  let fixture: ComponentFixture<BwElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BwElementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BwElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
