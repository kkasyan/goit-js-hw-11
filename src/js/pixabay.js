import axios from 'axios';
import { data } from 'infinite-scroll';
import { refs } from './refs';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// const BASEURL = 'https://pixabay.com/api/';
const KEY = '30555185-2572b857d9a371e437f5a3fd3';
// const options = {
//   key: '30555185-2572b857d9a371e437f5a3fd3',
//   image_type: 'all',
//   orientation: 'all',
//   safesearch: 'false',
//   per_page: 30,
//   page: 1,
// };

export async function getPhotos(searchQuery, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&page=${page}&per_page=${perPage}`
  );
  //   const response = await axios.get(BASEURL, { params: options });
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response;
}

function incrementPage() {}

function resetPage() {}

function calculateTotalPages() {}
