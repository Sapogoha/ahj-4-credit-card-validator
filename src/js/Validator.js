import cardTypes from './cardTypes';
import checkCardNumber from './checkCardNumber';
import checkCardType from './checkCardType';

export default class Validator {
  constructor(element) {
    this.imageContainer = element.querySelector('.validation-form__images');
    this.form = element.querySelector('.validation-form');
    this.input = element.querySelector('.validation-form__input');

    this.onSubmit = this.onSubmit.bind(this);
  }

  init() {
    for (const [key, value] of Object.entries(cardTypes)) {
      this.addCards(value);
    }
    this.input.closest('form').addEventListener('submit', this.onSubmit);
  }

  addCards(cardType) {
    const img = new Image();
    img.dataset.name = cardType;
    img.classList.add('card__img');
    img.classList.add(`${cardType}`);
    this.imageContainer.appendChild(img);
  }

  onSubmit(event) {
    event.preventDefault();
    this.removeLatestMessage();
    if (!checkCardNumber(this.input.value)) {
      this.showInvalidCard();
    } else if (checkCardType(this.input.value) === 'unknown') {
      this.showCardType('a valid bank card whose type we cannot identify');
    } else {
      this.showCardType(checkCardType(this.input.value));
    }

    this.input.value = '';
  }

  removeLatestMessage() {
    const message = this.form.querySelector('.card-type');
    if (message) {
      this.form.removeChild(message);
    }

    const error = this.form.querySelector('.error');
    if (error) {
      this.form.removeChild(error);
    }
  }

  showCardType(cardType) {
    const type = document.createElement('div');
    type.classList.add('card-type');
    if (cardType === 'a valid bank card whose type we cannot identify') {
      type.classList.add('unknown-type');
    } else {
      type.classList.add('known-type');
    }
    const typeInput = document.createElement('span');
    typeInput.classList.add('card-type__input');

    typeInput.textContent = `${this.input.value} - This is ${cardType}`;

    type.insertAdjacentElement('afterbegin', typeInput);

    this.form.appendChild(type);
  }

  showInvalidCard() {
    const errorEl = document.createElement('div');
    errorEl.classList.add('error');
    const errorElInput = document.createElement('span');
    errorElInput.classList.add('error__input');

    errorElInput.textContent = 'This number is not a bank card number';

    errorEl.insertAdjacentElement('afterbegin', errorElInput);

    this.form.appendChild(errorEl);
  }
}
