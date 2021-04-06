const parse = require('./parse');

test('return null for empty string', () => {
  expect(parse('')).toBe(null);
});

test('throws error for invalid string', () => {
  expect(() => parse()).toThrow(TypeError);
  expect(() => parse('vCV0CHjTyl')).toThrow(Error);
  expect(() => parse('Baerer vCV0CHjTyl')).toThrow(Error);
  expect(() => parse('Bearer: vCV0CHjTyl')).toThrow(Error);
  expect(() => parse('Bearer vCV0CHjTy')).toThrow(Error);
});

test('return tkoen for valid string', () => {
  expect(parse('Bearer vCV0CHjTyl')).toBe('vCV0CHjTyl');
});
