// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryImg = document.querySelector('.gallery');

const imagesMarkup = galleryItems
.map(({preview,original,description}) => 
`<li class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}"/>
</a></li>`).join("");

galleryImg.insertAdjacentHTML('afterbegin', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionDelay: 250
});