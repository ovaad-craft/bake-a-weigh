import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitaminsAndMineralsListComponent } from './vitamins-and-minerals-list.component';

describe('VitaminsAndMineralsListComponent', () => {
  let component: VitaminsAndMineralsListComponent;
  let fixture: ComponentFixture<VitaminsAndMineralsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitaminsAndMineralsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VitaminsAndMineralsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
