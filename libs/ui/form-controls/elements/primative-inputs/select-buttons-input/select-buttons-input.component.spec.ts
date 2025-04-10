import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectButtonsInputComponent } from './select-buttons-input.component';

describe('SelectButtonsComponent', () => {
  let component: SelectButtonsInputComponent< unknown > ;
  let fixture: ComponentFixture<SelectButtonsInputComponent< unknown > >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectButtonsInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectButtonsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
