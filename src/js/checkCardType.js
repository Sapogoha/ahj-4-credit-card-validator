import cardCodes from '../json/cardCodes.json';

export default function checkCardType(number) {
  let cardType = 'unknown';

  Object.entries(cardCodes).forEach((element) => {
    element[1].forEach((item) => {
      if (number.startsWith(item)) {
        cardType = element[0];
      }
    });
  });

  return cardType;
}
