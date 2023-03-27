import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const createHtmlLi = createGalleryImage(galleryItems);

console.log(gallery)

function createGalleryImage(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
</li>`
        }
    )
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', createHtmlLi);


gallery.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return 
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

    document.addEventListener("keydown", onKeydown);


    function onKeydown(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
        instance.close();
        } 
    };
    document.removeEventListener("keydown", onKeydown);

    // instance.close(() => )
}