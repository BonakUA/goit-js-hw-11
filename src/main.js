import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';
const imgContainer = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.text.value.trim();
    imgContainer.innerHTML = '';
    if (searchQuery === '') {
        return iziToast.error({
            message:
                'Sorry, there are no images matching your search query. Please try again!',
        });
    }
    imgContainer.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    fetchPhotos(searchQuery)
        .then(imagesData => {
            if (imagesData.hits.length === 0) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            imgContainer.innerHTML = createMarkup(imagesData.hits);
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionsDelay: 250,
            });
        })
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
            loaderEl.classList.add('is-hidden');
        });
}
form.addEventListener('submit', onSearch);