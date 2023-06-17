import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');
function galleryItemsArray() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item" style="list-style: none">
    <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>
`;
    })
    .join('');
}

galleryWrapper.insertAdjacentHTML('beforeend', galleryItemsArray(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  //   captionPosition: "bottom",
  captionDelay: 250,
});

export { galleryItemsArray };
