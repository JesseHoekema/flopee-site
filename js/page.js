// page.js
const showPage = (pageId) => {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    const currentPage = document.getElementById(pageId);
    
    if (currentPage) {
      currentPage.style.display = 'block';
    } else {
      console.error(`Page with id '${pageId}' not found.`);
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    showPage('indexPage');
  });
  