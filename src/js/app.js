import cardTypes from './cardTypes';
import generateLogos from './generateLogos';

const imageContainer = document.querySelector('.validation-form__images');

for (const [key, value] of Object.entries(cardTypes)) {
  generateLogos(imageContainer, value);
}
