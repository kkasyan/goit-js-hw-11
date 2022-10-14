import Notiflix from 'notiflix';

export function onSearchEnd() {
  Notiflix.Notify.warning(
    "We're sorry, but you've reached the end of search results"
  );
}

export function onNoResults() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

export function onFoundImages(totalHits) {
  Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
}

export function onEmptyInput() {
  Notiflix.Notify.failure('Please insert what you are looking for!');
}
