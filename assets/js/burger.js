window.onload = function() {
    document.querySelector('.burger').addEventListener('click', function() {
      document.querySelector('.menu').classList.toggle('active');
    });
};