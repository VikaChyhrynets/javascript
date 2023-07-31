window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader');
  
    function hideTabContent() {
      tabsContent.forEach(item => {
        item.style.display = 'none';
      });
  
      tabs.forEach(item => {
        item.classList.remove('tabheader__item_active'); // Removed the dot before the class name
      });
    }
  
    function showTabContent(i = 0) {
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active'); // Removed the dot before the class name
    }
  
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

  
  // timer
  const timeEnd = '2023-07-31';

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);
  
    updateClock();
  
    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  
  setClock('.timer', timeEnd);

  // modal
  /*
  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modalClose = document.querySelector('[data-close]');
  const modal = document.querySelector('.modal');
  
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
    });
  });
  
  modalClose.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "hidden";
  });
  
  modal.addEventListener('click', (e)=> {
    if(e.target === modal) {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e)=> {
    if(e.code === 'Escape') {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  })*/

  const modalTrigger = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelector('[data-close]');
const modal = document.querySelector('.modal');

function showModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = "hidden";
}

function hideModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = "";
}

function onModalClick(e) {
  if (e.target === modal) {
    hideModal();
  }
}

function onEscapeKeyPress(e) {
  if (e.code === 'Escape') {
    hideModal();
  }
}

modalTrigger.forEach(btn => {
  btn.addEventListener('click', showModal);
});

modalClose.addEventListener('click', hideModal);
modal.addEventListener('click', onModalClick);
document.addEventListener('keydown', onEscapeKeyPress);


// slides
const slides = document.querySelector('.offer__slide'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next');

let slideIndex = 1;



}); 