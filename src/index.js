const axios = require('axios');
import Notiflix from 'notiflix';
import { simple } from './js/gallery';
import { makeCardTemplate } from './js/makeCardTemplate';

Notiflix.Notify.failure(
  'Sorry, there are no images matching your search query. Please try again.'
);
Notiflix.Notify.warning(
  "We're sorry, but you've reached the end of search results"
);

Notiflix.Notify.success('Hooray! We found totalHits images.');

function onSearch(evt) {
  evt.preventDefault();
}

const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});

// /ку
