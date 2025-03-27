import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarProfileComponent } from './sugar-profile.component';

describe('SugarProfileComponent', () => {
  let component: SugarProfileComponent;
  let fixture: ComponentFixture<SugarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SugarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
