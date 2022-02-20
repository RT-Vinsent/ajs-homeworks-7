import Validator from '../validator';

/*
  Тесты для первой задачи Никнеймы
*/
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

/*
  Тесты для второй задачи Телефоны
*/
test('validatePhoneNumber Russion 8', () => {
  const expected = '+79270000000';

  const validator = new Validator();
  const received = validator.validatePhoneNumber('8 (927) 000-00-00');

  expect(received).toBe(expected);
});

test('validatePhoneNumber Russion 7', () => {
  const expected = '+79600000000';

  const validator = new Validator();
  const received = validator.validatePhoneNumber('+7 960 000 00 00');

  expect(received).toBe(expected);
});

test('validatePhoneNumber other numbers', () => {
  const expected = '+860000000000';

  const validator = new Validator();
  const received = validator.validatePhoneNumber('+86 000 000 0000');

  expect(received).toBe(expected);
});

test('validatePhoneNumber empty value', () => {
  const expected = '';

  const validator = new Validator();
  const received = validator.validatePhoneNumber();

  expect(received).toBe(expected);
});
