import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtractProfileComponent } from './extract-profile.component';

describe('ExtractProfileComponent', () => {
  let component: ExtractProfileComponent;
  let fixture: ComponentFixture<ExtractProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtractProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
