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
import { getPhotos, incrementPage } from './js/pixabay-api';
import Notiflix from 'notiflix';
import {
  onEmptyInput,
  onFoundImages,
  onNoResults,
  onSearchEnd,
} from './js/notifications';
import PixabayApiService from './js/pixabay-api';
import { data } from 'infinite-scroll';

// export let page = 1;
// export const perPage = 30;
// export let searchQuery = '';

const pixabay = new PixabayApiService();

refs.formEl.addEventListener('submit', onSubmit);
refs.galleryEl.addEventListener('click', onGalleryClick);
refs.btnMoreEl.addEventListener('click', onLoadMore);

function onSubmit(evt) {
  evt.preventDefault();
  onClearHTMLMarkup();
  pixabay.resetPage();
  // searchQuery = evt.currentTarget.elements.searchQuery.value
  //   .trim()
  //   .toLowerCase();
  pixabay.searchQuery = evt.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  pixabay.getPhotos();
  // if (!this.searchQuery) {
  //   // Notiflix.Loading.circle();
  //   onEmptyInput();
  //   return;
  // }
  // if (!searchQuery) {
  //   // Notiflix.Loading.circle();
  //   onEmptyInput();
  //
  //   return;
  // }?
  //   pixabay
  //     .getPhotos(this.searchQuery, this.page, this.perPage)
  //     .then(({ data }) => {
  //       this.totalPages = Number(Math.ceil(data.total / this.perPage));
  //       console.log(Number('this.totalPages'));
  //       if (data.hits.length === 0) {
  //         onNoResults();
  //         return;
  //       }
  //       if (data.hits.length !== 0) {
  //         makeCardTemplate(data.hits);
  //         pixabay.incrementPage(this.page);
  //         onFoundImages(data.totalHits);
  //         // pixabay.calculateTotalPages(data.total);
  //         // if (this.totalPages === 1) {
  //         //   onSearchEnd();
  //         // }
  //         // if (this.page < 1) {
  //         //   makeCardTemplate(data.hits);
  //         //   incrementPage(page);
  //         // else {
  //         //   // onFoundImages(data.totalHits);
  //         // }
  //       }
  //     })
  //     // .then(page => {
  //     //   incrementPage(page);
  //     // })
  //     .catch(error => console.log(error));
  // }

  // const { height: cardHeight } = document
  //   .querySelector('.gallery')
  //   .firstElementChild.getBoundingClientRect();

  // window.scrollBy({
  //   top: cardHeight * 2,
  //   behavior: 'smooth',
  // });
}
function onLoadMore() {
  // pixabay.getPhotos(this.searchQuery, this.page, this.perPage);
  // pixabay.incrementPage(this.page);
  pixabay.getPhotos();
}
// makeCardTemplate();
// pixabay.incrementPage();
// makeCardTemplate(hits);

// pixabay.getPhotos(this.searchQuery, this.page, this.perPage);

// getPhotos(searchQuery, page, perPage);
// makeCardTemplate();
// incrementPage(page);
