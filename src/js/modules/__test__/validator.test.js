import Validator from '../validator';

/*
  Тесты для первой задачи Никнеймы
*/
test.each([
  ['letters', 'Roman', true],
  ['letters, "_" and "-"', 'Ro-Man_bb', true],
  ['letters, "_", "-" and 2 number', 'Roman-88_TT', true],
  ['letters, "_", "-" and 3 number', 'Ro-M_a888n', true],
])(
  ('Validator true "letters, "_", "-" and number"'),
  (level, name, expected) => {
    const result = Validator.validateUsername(name);
    expect(result).toBe(expected);
  },
);

test.each([
  ['beginning number', '1Roman', false],
  ['final number', 'Roman2', false],
  ['beginning "_"', '_Roman', false],
  ['final "_"', 'Roman_', false],
  ['more 3 number', 'Ro0000man', false],
  ['NULL values', '', false],
])(
  ('Validator false'),
  (level, name, expected) => {
    const result = Validator.validateUsername(name);
    expect(result).toBe(expected);
  },
);

/*
  Тесты для второй задачи Телефоны
*/
test.each([
  ['Russion 8', '8 (927) 000-00-00', '+79270000000'],
  ['Russion 7', '+7 960 000 00 00', '+79600000000'],
  ['other numbers', '+86 000 000 0000', '+860000000000'],
  ['empty value', '', ''],
])(
  ('validatePhoneNumber'),
  (level, tel, expected) => {
    const result = Validator.validatePhoneNumber(tel);
    expect(result).toBe(expected);
  },
);
