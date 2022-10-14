import Notiflix from 'notiflix';

export function onSearchEnd() {
  Notiflix.Notify.warning(
    "We're sorry, but you've reached the end of search results",
    {
      timeout: 5000,
    }
  );
}

export function onNoResults() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      timeout: 5000,
    }
  );
}

export function onFoundImages(totalHits) {
  Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`, {
    timeout: 5000,
  });
}

export function onEmptyInput() {
  Notiflix.Notify.failure('Please insert what you are looking for!', {
    timeout: 5000,
  });
}
