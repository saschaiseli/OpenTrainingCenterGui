import { CalculationsModule } from './calculations.module';

describe('CalculationsModule', () => {
  let calculationsModule: CalculationsModule;

  beforeEach(() => {
    calculationsModule = new CalculationsModule();
  });

  it('should create an instance', () => {
    expect(calculationsModule).toBeTruthy();
  });
});
