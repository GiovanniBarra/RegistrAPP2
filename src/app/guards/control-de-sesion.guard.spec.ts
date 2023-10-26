import { TestBed } from '@angular/core/testing';

import { ControlDeSesionGuard } from './control-de-sesion.guard';

describe('ControlDeSesionGuard', () => {
  let guard: ControlDeSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlDeSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
