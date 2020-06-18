const wes = document.querySelector('.wes');
wes.addEventListener('click', function(event) {
        // console.log('YOU CLICKED IT!');
        const shouldChangePage = confirm(
                'This website might contain Veeerusess, do you want to gamble with your life?'
        );
        if (!shouldChangePage) {
                event.preventDefault();
        }
        // console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

// signupForm.addEventListener('submit', function(event) {
//         console.log(event);
//         event.preventDefault();
//         console.log(event.currentTarget.name.value);
//         console.log(event.currentTarget.email.value);
//         console.log(event.currentTarget.agree.checked);
// });

signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.currentTarget.name.value;
        if (name !== 'chad') {
                alert(`you're a badass!`);
                event.preventDefault();
        } else {
                alert('sorry Michael');
        }
});

function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// `keyup``keydown``focus``blur`;
