/*
* Looking at scroll event all the time is too resource hungry
* Pass event listener to debounce and it only runs the function 
* once every 'so many' milliseconds. 10 in this case
*/
function debounce(func, wait = 10, immediate = true) {

    var timeout;

    return function() {
      var context = this, args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // loop over all images and decide where it needs to be shown
    sliderImages.forEach(sliderImage => {
        // get pixel value at bottom of window + half the image size 
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 4);
        // when scrolling up need the bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));