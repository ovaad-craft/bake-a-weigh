import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcategoryButtonComponent } from './subcategory-button.component';

describe('SubcategoryButtonComponent', () => {
  let component: SubcategoryButtonComponent;
  let fixture: ComponentFixture<SubcategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubcategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
