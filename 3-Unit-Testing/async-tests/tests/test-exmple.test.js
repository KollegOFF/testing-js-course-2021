import TestExample from '../src/test-example';


it('Should return user age if user is above 18 years', async () => {
  window.alert = jest.fn();

  expect.hasAssertions();
  const EXPECTED_AGE = 18;

  const user = {
    age: EXPECTED_AGE
  };


  const testExample = new TestExample();

  try {
    const result = await testExample.methodForTest(user);
    expect(result).toBe(EXPECTED_AGE);
  } catch (error) {
  }

});
