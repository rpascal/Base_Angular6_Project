import { FontAwesomeModule } from './font-awesome.module';

describe('FontAwesomeModule', () => {
  let fontAwesomeModule: FontAwesomeModule;

  beforeEach(() => {
    fontAwesomeModule = new FontAwesomeModule();
  });

  it('should create an instance', () => {
    expect(fontAwesomeModule).toBeTruthy();
  });
});
