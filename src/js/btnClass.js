import { refs } from './refs';

export function onBtnShow() {
  refs.btnMoreEl.classList.remove('is-hidden');
}

export function onBtnHide() {
  refs.btnMoreEl.classList.add('is-hidden');
}
