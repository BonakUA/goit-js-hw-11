const API_KEY = '43981018-e90bba841625934206eceb401';
const BASE_URL = 'https://pixabay.com/api/';
export const fetchPhotos = searchImage => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 21,
  });
  return fetch(`${BASE_URL}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
};