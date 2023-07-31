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
    const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(t/(1000*60*60*24)),
    hours = Math.floor(t/(1000*60*60)%24),
    minutes = Math.floor((t/1000/60)%60),
    sec = Math.floor((t/1000)%60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
    function setClock(selector, endTime) {
      const timer = document.querySelector(selector),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.seconds('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
        const t = getTimeRemaining(endTime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
      }
    }
}

}); 
