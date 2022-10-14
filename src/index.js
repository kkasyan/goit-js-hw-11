const axios = require('axios');
import { onClearHTMLMarkup } from './js/clearMarkup';
import { simple } from './js/gallery';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { makeCardTemplate, simple } from './js/makeCardTemplate';
import { refs } from './js/refs';
import { getPhotos } from './js/pixabay';
import {
  onEmptyInput,
  onFoundImages,
  onNoResults,
  onSearchEnd,
} from './js/notifications';

let pages;

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const searchQuery = evt.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();

  if (!searchQuery) {
    onEmptyInput();
    return;
  }

  getPhotos()
    .then(({ data }) => {
      if (data.hits.length === 0) {
        onNoResults();
        return;
      }
      onFoundImages(data.totalHits);
      makeCardTemplate(data.hits);
      if (pages === 1) {
        onSearchEnd();
      }
    })
    .catch(error => console.log(error));
}

// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });
