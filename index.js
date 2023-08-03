// Smooth scrolling when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetOffset = targetSection.getBoundingClientRect().top;
        const scrollOffset = targetOffset - headerHeight;
  
        window.scrollBy({
          top: scrollOffset,
          behavior: 'smooth'
        });
      });
    });
  });
  