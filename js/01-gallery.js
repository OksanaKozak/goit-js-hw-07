import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList= document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryList.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
  );

  instance.show();
}


