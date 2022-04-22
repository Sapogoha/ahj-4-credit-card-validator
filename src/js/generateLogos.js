export default function generateLogos(container, cardType) {
  const img = new Image();
  img.src = `../img/${cardType}.png`;
  img.dataset.name = cardType;
  img.classList.add('card__img');
  img.classList.add(`${cardType}`);
  container.appendChild(img);
}
