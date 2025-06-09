document.addEventListener('DOMContentLoaded', function() {
  const nextArrow = document.querySelector('.nav-arrow.next');
  
  if (nextArrow) {
    nextArrow.addEventListener('click', function(e) {
      const nextPage = this.getAttribute('href');
      const currentPage = window.location.pathname.split('/').pop();
      
      // Update preview content based on current page
      if (currentPage === 'toolkit.html') {
        const previewTitle = document.querySelector('.page-preview.next .title-box h1');
        if (previewTitle) {
          previewTitle.textContent = 'Featured Projects';
        }
      }
    });
  }
}); 
