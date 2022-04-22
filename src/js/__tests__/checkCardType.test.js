import checkCardType from '../checkCardType';

describe('checkCardType function should identify type of valid bank card', () => {
  test.each([
    ['345662404096571', 'American Express'],
    ['373273502125570', 'American Express'],
    ['373273502125570', 'American Express'],
    ['3538511250385102', 'JCB'],
    ['3531574597547518', 'JCB'],
    ['3531854155126688563', 'JCB'],
    ['2221007113999605', 'Mastercard'],
    ['2720997066164007', 'Mastercard'],
    ['5458907373891763', 'Mastercard'],
    ['2200000000000038', 'MIR'],
    ['2200000000000053', 'MIR'],
    ['6250947000000014', 'Unionpay'],
    ['6250946000000016', 'Unionpay'],
    ['4539659867105046', 'Visa'],
    ['4485500756689631050', 'Visa'],
    ['4026479399670171', 'Visa'],
    ['4917340184642910', 'Visa'],
    ['4008026478392825458', 'Visa'],
  ])('checkCardType with parameter %s', (input, expected) => {
    expect(checkCardType(input)).toBe(expected);
  });
});
