import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProteinGroupComponent } from './protein-group.component';

describe('ProteinGroupComponent', () => {
  let component: ProteinGroupComponent;
  let fixture: ComponentFixture<ProteinGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProteinGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
