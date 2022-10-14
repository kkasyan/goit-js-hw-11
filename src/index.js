const axios = require('axios');
import { onClearHTMLMarkup } from './js/clearMarkup';
import { simple } from './js/gallery';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  makeCardTemplate,
  simple,
  onGalleryClick,
} from './js/makeCardTemplate';
import { refs } from './js/refs';
import { getPhotos } from './js/pixabay';
import Notiflix from 'notiflix';
import {
  onEmptyInput,
  onFoundImages,
  onNoResults,
  onSearchEnd,
} from './js/notifications';

let page = 1;
let query = '';
const perPage = 30;

refs.formEl.addEventListener('submit', onSubmit);
refs.galleryEl.addEventListener('click', onGalleryClick);

function onSubmit(evt) {
  evt.preventDefault();
  onClearHTMLMarkup();
  const searchQuery = evt.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();

  if (!searchQuery) {
    // Notiflix.Loading.circle();
    onEmptyInput();

    return;
  }
  getPhotos(searchQuery)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        onNoResults();
        return;
      }

      makeCardTemplate(data.hits);
      if (page === 1) {
        onFoundImages(data.totalHits);
        onSearchEnd();
      } else {
        onFoundImages(data.totalHits);
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
