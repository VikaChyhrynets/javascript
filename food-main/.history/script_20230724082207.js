window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader');
  
    function hideTabContent() {
      tabsContent.forEach(item => {
        item.style.display = 'none';
      });
  
      tabs.forEach(item => {
        item.classList.remove('.tabheader__item_active'); // Removed the dot before the class name
      });
    }
  
    function showTabContent(i = 0) {
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('.tabheader__item_active'); // Removed the dot before the class name
    }
  
    hideTabContent();
    showTabContent();
  });