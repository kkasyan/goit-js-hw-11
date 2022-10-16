import axios from 'axios';
import { data } from 'infinite-scroll';
import { onFoundImages, onSearchEnd, onNoResults } from './notifications';
import { makeCardTemplate } from './makeCardTemplate';
import { onBtnHide, onBtnShow } from './btnClass';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { pixabay } from '../index';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30555185-2572b857d9a371e437f5a3fd3';

const simple = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

export default class PixabayApiService {
  constructor(params) {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 30;
  }

  async getPhotos() {
    try {
      const response = await axios.get(
        `?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&page=${this.page}&per_page=${this.perPage}`
      );

      if (response.data.hits.length === 0) {
        onNoResults();
        return;
      }
      if (response.data.hits.length !== 0) {
        onFoundImages(response.data.totalHits);
        makeCardTemplate(response.data.hits);
        this.incrementPage();
        onBtnShow();
        simple.refresh();
      }
      if (response.data.hits.length < this.perPage) {
        onSearchEnd();
        onBtnHide();
      }

      if (this.page > 1) {
        const { height: cardHeight } = document
          .querySelector('.gallery')
          .firstElementChild.getBoundingClientRect();

        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      if (response.status === 404) {
        throw new Error(response.status);
      }
      return response;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  calculateTotalPages(total) {
    this.totalPages = Math.ceil(total / this.perPage);
    console.log(this.totalPages);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  onLoadMore() {
    pixabay.getPhotos();
  }
}
