import { onClearHTMLMarkup } from './js/clearMarkup';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { onGalleryClick } from './js/makeCardTemplate';
import { refs } from '../src/js/refs';
import PixabayApiService from './js/pixabay-api';
import { onGalleryClick } from './js/makeCardTemplate';

export const pixabay = new PixabayApiService();

refs.formEl.addEventListener('submit', onSubmit);
refs.galleryEl.addEventListener('click', onGalleryClick);
refs.btnMoreEl.addEventListener('click', pixabay.onLoadMore);

function onSubmit(evt) {
  evt.preventDefault();
  onClearHTMLMarkup();
  pixabay.resetPage();
  pixabay.searchQuery = evt.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  pixabay.getPhotos();
}
