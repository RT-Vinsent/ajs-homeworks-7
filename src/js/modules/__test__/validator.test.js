import Validator from '../validator';

test('Validator true', () => {
  const validator = new Validator();

  const resultOne = validator.validateUsername('Roman');
  const resultTwo = validator.validateUsername('Ro-Man_bb');
  const resultThree = validator.validateUsername('Roman-88_TT');
  const resultFour = validator.validateUsername('Ro-M_a888n');

  expect(true).toBe(resultOne);
  expect(true).toBe(resultTwo);
  expect(true).toBe(resultThree);
  expect(true).toBe(resultFour);
});

test('Validator false', () => {
  const validator = new Validator();

  const resultOne = validator.validateUsername('1Roman');
  const resultTwo = validator.validateUsername('Roman2');
  const resultThree = validator.validateUsername('_Roman');
  const resultFour = validator.validateUsername('Roman_');
  const resultFive = validator.validateUsername('Ro0000man');

  expect(false).toBe(resultOne);
  expect(false).toBe(resultTwo);
  expect(false).toBe(resultThree);
  expect(false).toBe(resultFour);
  expect(false).toBe(resultFive);
});

test('Validator NULL values', () => {
  const validator = new Validator();

  const resultOne = validator.validateUsername();

  expect(false).toBe(resultOne);
});
