import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestChild02Component } from './test-child02.component';

describe('TestChild02Component', () => {
  let component: TestChild02Component;
  let fixture: ComponentFixture<TestChild02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestChild02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TestChild02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
