import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simple = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
