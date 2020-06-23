const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const hr = document.querySelector('hr');
const button = document.querySelector('.accept');

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

// function obCallback(payload) {
//         if (payload[0].intersectionRatio === 1) {
//                 button.disabled = false;
//         } else button.disabled = true;
// }

// STOP OBSERVING THE BUTTON

function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
                button.disabled = false;
                ob.unobserve(terms.lastElementChild);
        }
}

ob.observe(terms.lastElementChild);
