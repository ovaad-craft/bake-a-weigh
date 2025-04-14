import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SodiumComponent } from './sodium.component';

describe('SodiumComponent', () => {
  let component: SodiumComponent;
  let fixture: ComponentFixture<SodiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SodiumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
