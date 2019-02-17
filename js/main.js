// Toggle drop down

const containers = document.querySelectorAll('.select-bar');

for (let i = 0; i < containers.length; i++) {
    var container = containers[i];
    var title = container.querySelector('.title-select-bar');
     title.addEventListener('click', function() {
    var c = this.parentNode.parentNode;
    c.classList.toggle('active');
  });
}

// CAROSEL

// Setup Carousel's main variables
let carouselPage = 1;
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselBtns = document.querySelectorAll('.carousel-btn');

// Iterate list of buttons found
for ( let i = 0; i < carouselBtns.length; i++ ) {
  let btn = carouselBtns[i];
  btn.addEventListener('click', function() {
    switch ( this.dataset.target ) {
      case 'previous':
        if ( carouselPage > 1 )
          carouselPage--;
        break;
      case 'next':
        if ( carouselPage < carouselBtns.length )
          carouselPage++;
        break;
      default:
        return;
    }

    carouselWrapper.style.transform = 'translateX(calc(100% * -' + (carouselPage - 1) + '))';
  });
}
//MODAL
const btnModalOpen = document.querySelector('.btn-modal-open');
const btnModalClose = document.querySelector('.btn-modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

btnModalOpen.addEventListener('click', function() {
   modal.classList.add('active');
});

btnModalClose.addEventListener('click', function() {
   modal.classList.remove('active');
});

modalOverlay.addEventListener('click', function() {
   modal.classList.remove('active');
});