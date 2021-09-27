const pictureInnerContainer = document.querySelector('.image-container');
let massImg = [];
for (let i = 1; i <= 15; i++) {
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = 'assets/img/galery/galery' + [i] + '.jpg';
    img.alt = 'galery' + [i];
    massImg.push(img);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(massImg);
for (let i = 1; i <= 15; i++) {
    pictureInnerContainer.append(massImg[i]);
}