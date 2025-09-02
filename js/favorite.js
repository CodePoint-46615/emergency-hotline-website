function countFavorite() {
    const parent = document.getElementById('count-favorite');
    let updatedCount = parseInt(parent.innerText);
    updatedCount++;
    parent.innerText = updatedCount;
}

// count favorite card - 1
document.getElementById('img-add-to-favorite-card-1').addEventListener('click', () => {
    countFavorite();
})

// // count favorite event listener for card -2
// document.getElementById('img-add-to-favorite-card-2').addEventListener('click', () => {
//     countFavorite();
// })