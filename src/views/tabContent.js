import ImageCireng from './images/cireng.jpg';
import ImageBakso from './images/bakso.jpg';
import ImageSatay from './images/satay.jpg';
import ImageGerobak from './images/gerobak.jpg';

export const homeContent = () => {

  const section = document.createElement('section');
  section.classList.add('media');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('media__image-container');
  section.append(imageContainer);

  const image = new Image();
  image.src = ImageGerobak;
  image.classList.add('media__image');
  imageContainer.append(image);

  const mediaBody = document.createElement('div');
  mediaBody.classList.add('media__body');
  section.append(mediaBody);

  const h2 = document.createElement('h2');
  h2.classList.add('media__title');
  h2.textContent = 'Home';
  mediaBody.appendChild(h2);

  const p = document.createElement('p');
  p.classList.add('media__paragraph');
  p.textContent = `
  NASI GORENG SEBELUM GILA amet consectetur adipisicing elit. Nostrum quia eius odit, a dolor dicta nihil
            exercitationem et cumque eligendi architecto ex laboriosam voluptate voluptas numquam! Perferendis voluptate
            porro architecto ullam fuga necessitatibus quod cum ut! Veritatis ad dolor ratione minus consequatur
            excepturi
            quod laborum odit ex exercitationem consectetur quia magni, cupiditate blanditiis maxime officia vero
            voluptates dolores enim illum provident rem tempora impedit pariatur! Vitae ducimus, fugiat, et nisi, quidem
            accusantium beatae officia animi culpa eveniet labore. Eaque fugit aliquid eveniet nemo, eligendi porro quia
            doloremque molestiae sit quae perspiciatis distinctio maiores possimus assumenda deserunt laudantium
            quisquam
            quaerat incidunt.
  `
  mediaBody.append(p);

  return section;
}

const cardComponent = ({ imageLink, title, subtitle }) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = new Image();
  image.src = imageLink;
  card.appendChild(image);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card__title');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);
  
  const cardSubtitle = document.createElement('div');
  cardSubtitle.classList.add('card__subtitle');
  cardSubtitle.textContent = subtitle;
  card.appendChild(cardSubtitle);

  return card;
}

const cardData = [
  {
    title: 'Cireng Aja Deh',
    subtitle: 'Rp. 500.00',
    imageLink: ImageCireng,
  },
  {
    title: 'Bakso Solo Kayaknya',
    subtitle: 'Rp. 12.500.00',
    imageLink: ImageBakso,
  },
      {
    title: 'Satay Satay Apa yang',
    subtitle: 'Rp. 20.000.00',
    imageLink: ImageSatay,
  },
  {
    title: 'Bakso Solo Kayaknya',
    subtitle: 'Rp. 12.500.00',
    imageLink: ImageBakso,
  },
  {
    title: 'Satay Satay Apa yang',
    subtitle: 'Rp. 20.000.00',
    imageLink: ImageSatay,
  },
  {
    title: 'Cireng Aja Deh',
    subtitle: 'Rp. 500.00',
    imageLink: ImageCireng,
  },
]

export const ourProductsContent = () => {

  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.textContent = 'Our Products';
  section.appendChild(h2);

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  section.appendChild(cardContainer);

  cardData.forEach(item => {
    const { title, subtitle, imageLink } = item;
    const card = cardComponent({ title, subtitle, imageLink });
    cardContainer.appendChild(card);
  })

  return section;
}

export const aboutUsContent = () => {

  const section = document.createElement('section');

  const h2 = document.createElement('h2');
  h2.textContent = 'About Us';
  section.appendChild(h2);

  const p1 = document.createElement('p');
  p1.textContent = `
  quod laborum odit ex exercitationem consectetur quia magni, cupiditate blanditiis maxime officia vero
  voluptates dolores enim illum provident rem tempora impedit pariatur! Vitae ducimus, fugiat, et nisi, quidem
  accusantium beatae officia animi culpa eveniet labore. Eaque fugit aliquid eveniet nemo, eligendi porro quia
  doloremque molestiae sit quae perspiciatis distinctio maiores possimus assumenda deserunt laudantium
  quisquam
  quaerat incidunt.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eius odit, a dolor dicta nihil
  exercitationem et cumque eligendi architecto ex laboriosam voluptate voluptas numquam! Perferendis voluptate
  porro architecto ullam fuga necessitatibus quod cum ut! Veritatis ad dolor ratione minus consequatur
  excepturi.
  `

  const p2 = document.createElement('p');
  p2.textContent = `
  quod laborum odit ex exercitationem consectetur quia magni, cupiditate blanditiis maxime officia vero
  voluptates dolores enim illum provident rem tempora impedit pariatur! Vitae ducimus, fugiat, et nisi, quidem
  accusantium beatae officia animi culpa eveniet labore. Eaque fugit aliquid eveniet nemo, eligendi porro quia
  doloremque molestiae sit quae perspiciatis distinctio maiores possimus assumenda deserunt laudantium
  quisquam
  quaerat incidunt.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eius odit, a dolor dicta nihil
  exercitationem et cumque eligendi architecto ex laboriosam voluptate voluptas numquam! Perferendis voluptate
  porro architecto ullam fuga necessitatibus quod cum ut! Veritatis ad dolor ratione minus consequatur
  excepturi.
  `


  section.append(p1, p2);

  return section;
}