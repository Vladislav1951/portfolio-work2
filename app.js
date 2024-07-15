const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('shrink');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('shrink');
        }
    });
});

const textarea = document.querySelectorAll('.textarea');

textarea.forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('shrink');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('shrink');
        }
    });
});

