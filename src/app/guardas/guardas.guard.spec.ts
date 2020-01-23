import { TestBed, async, inject } from '@angular/core/testing';

import { GuardasGuard } from './guardas.guard';

describe('GuardasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardasGuard]
    });
  });

  it('should ...', inject([GuardasGuard], (guard: GuardasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
