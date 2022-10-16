import axios from 'axios';
import { data } from 'infinite-scroll';
import { refs } from './refs';
// import { searchQuery, page, perPage } from '../index';
import { onFoundImages, onSearchEnd } from './notifications';
import { makeCardTemplate } from './makeCardTemplate';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30555185-2572b857d9a371e437f5a3fd3';

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
      }
      if (response.data.hits.length !== 0) {
        onFoundImages(data.totalHits);
        makeCardTemplate(response.data.hits);
        this.incrementPage();
      }
      if (response.data.hits.length < options.per_page) {
        onSearchEnd();
      }
      //   const response = await axios.get(BASEURL, { params: options });
    } catch (error) {
      throw new Error(error.message);
      // if (this.error.response.status !== 200) {
      //   throw new Error(response.status);
      // }
      // return response;
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
}

// const BASEURL = 'https://pixabay.com/api/';
// const options = {
//   key: '30555185-2572b857d9a371e437f5a3fd3',
//   image_type: 'all',
//   orientation: 'all',
//   safesearch: 'false',
//   per_page: 30,
//   page: 1,
// };

// export async function getPhotos(searchQuery, page, perPage) {
//   const response = await axios.get(
//     `?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&page=${page}&per_page=${perPage}`
//   );
//   //   const response = await axios.get(BASEURL, { params: options });
//   if (response.status !== 200) {
//     throw new Error(response.status);
//   }
//   return response;
// }

// export function incrementPage(page) {
//   page += 1;
// }

// function resetPage(page) {
//   page = 1;
// }

export function calculateTotalPages(total) {
  total = Math.ceil(total / perPage);
}
