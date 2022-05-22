const toggleBtn = document.querySelector('.nav-toggle');
const pageLinks = document.querySelector('.page-links');

toggleBtn.addEventListener('click', function() {
    pageLinks.classList.toggle('show-links');
});
