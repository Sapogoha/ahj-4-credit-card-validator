import checkCardNumber from '../checkCardNumber';

describe('checkCardNumber function should check whether provided number is a card number or not', () => {
  test.each([
    ['true for card number', '4539659867105046', true],
    ['true for card number', '4485500756689631050', true],
    ['true for card number', '6011261114645288', true],
    ['true for card number', '6011419723758376795', true],
    ['true for card number', '30249093792635', true],
    ['true for card number', '4026479399670171', true],
    ['true for card number', '2221002863553306', true],
    ['true for card number', '2720997066164007', true],
    ['true for card number', '5458907373891763', true],
    ['true for card number', '3538511250385102', true],
    ['true for card number', '3531854155126688563', true],
    ['true for card number', '345662404096571', true],
    ['true for card number', '375222373378618', true],
    ['true for card number', '0604295043523006', true],
    ['true for card number', '2200000000000038', true],
    ['true for card number', '2200000000000053', true],
    ['false for other numbers', '7715964999', false],
  ])('it should be %s', (_, input, expected) => {
    expect(checkCardNumber(input)).toBe(expected);
  });
});
