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


gallery.addEventListener('click', onCklick)

function onCklick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return 
    }
    console.log(event.target)

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
}



// 
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()