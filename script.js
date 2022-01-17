const target = document.getElementById('target');
let array = ['simple', 'clear', 'smart', 'strong'];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.classList.add('letter');
    // letter.style.opacity = '0';

    letter.style.animation = 'anim 5s ease forwards';
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2000)
}

createLetter();