import Phone from '../Phone';

test('test Phone 8(9..)', () => {
  const str = '8 (927) 000-00-00';
  expect(Phone(str)).toBe('+79270000000');
});
test('test Phone +7 9.. ', () => {
  const str = '+7 960 000 00 00';
  expect(Phone(str)).toBe('+79600000000');
});
test('test Phone not Russian +86 ', () => {
  const str = '+86 000 000 0000';
  expect(Phone(str)).toBe('+860000000000');
});
test('test Phone not enough characters  ', () => {
  const str = '+7 960 000 00 0';
  expect(() => {
    Phone(str);
  }).toThrow('Введен не верный номер телефона');
});
test('test Phone many characters entered', () => {
  const str = '+7 960 000 00 00 34';
  expect(() => {
    Phone(str);
  }).toThrow('Введен не верный номер телефона');
});
