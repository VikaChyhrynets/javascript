window.addEventListener('DomContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');
    function hideTabContent() {
        tabContent.forEach(item=>{
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('.tabheader__item_active');
        });
    }
    
    function showTabContent(i=0) {
            tabsContent[i].style.display = 'block';
    }
})