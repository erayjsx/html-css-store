const btn = document.querySelector('.collapse-btn');
const content = document.querySelector('.collapse-content');

btn.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});