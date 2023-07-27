window.addEventListener('DomContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');
    function hideTabContent() {
        tabContent.forEach(item=>{
            item.style.display = 'none';
        })
    }
})