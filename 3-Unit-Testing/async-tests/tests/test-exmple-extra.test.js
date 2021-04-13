
import TestExample from '../src/test-example';

describe('Tests for methodForTestSync', () => {
  beforeAll(() => {
    window.alert = jest.fn();
  });

  it('Should alert when user age is under 18', () => {
    expect.hasAssertions();
    const EXPECTED_AGE = 17;

    const user = {
      age: EXPECTED_AGE
    };


    const testExample = new TestExample();

    testExample.methodForTestSync(user);
    expect(window.alert).toHaveBeenCalled();
  });

  it('Should not alert when user age is above 18', () => {

    expect.hasAssertions();
    const EXPECTED_AGE = 19;

    const user = {
      age: EXPECTED_AGE
    };


    const testExample = new TestExample();

    testExample.methodForTestSync(user);
    expect(window.alert).not.toHaveBeenCalled();
  });
});

