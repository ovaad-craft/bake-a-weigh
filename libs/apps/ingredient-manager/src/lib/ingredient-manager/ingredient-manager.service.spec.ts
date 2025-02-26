import { TestBed } from '@angular/core/testing';

import { IngredientManagerService } from './ingredient-manager.service';

describe('IngredientManagerService', () => {
  let service: IngredientManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
