const hearts = document.querySelectorAll('.favorite-icon');

hearts.forEach(span => {
  span.addEventListener('click', () => {
    span.classList.toggle('filled');
    span.innerHTML = span.classList.contains('filled') ? '&#10084;' : '&#9825;';
  });
});
