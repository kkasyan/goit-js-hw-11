import axios from 'axios';
import { data } from 'infinite-scroll';
import { refs } from './refs';

const BASEURL = 'https://pixabay.com/api/';

const options = {
  key: '30555185-2572b857d9a371e437f5a3fd3',
  image_type: 'all',
  orientation: 'all',
  safesearch: 'false',
  per_page: 30,
};

export async function getPhotos() {
  const response = await axios.get(BASEURL, { params: options });
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response;
}

function incrementPage() {}

function resetPage() {}

function calculateTotalPages() {}
