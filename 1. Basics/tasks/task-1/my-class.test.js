const MyClass = require('./my-class');

test('call with invalid argument throws error', () => {
  expect(() => MyClass.removeFalsyValues()).toThrow(TypeError);
  expect(() => MyClass.removeFalsyValues({})).toThrow(TypeError);
});

test('only falsy values removed', () => {
  expect(MyClass.removeFalsyValues([])).toEqual([]);
  expect(MyClass.removeFalsyValues([-1, 0, 1])).toEqual([-1, 1]);
  expect(MyClass.removeFalsyValues([true, false])).toEqual([true]);
  expect(MyClass.removeFalsyValues(['true', 'false'])).toEqual(['true', 'false']);
  expect(MyClass.removeFalsyValues(['', 0, false, null, undefined, NaN])).toEqual([]);
});
