const tabButtons = document.querySelectorAll('.tabBtn');
const tabContent = document.querySelectorAll('.tabCnt');
tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('history')){
            tab.classList.add('active');
            tabContent[0].classList.add('active');
            tabContent[1].classList.remove('active');
            tabContent[2].classList.remove('active');
            tabButtons[1].classList.remove('active')
            tabButtons[2].classList.remove('active')
        }
        else if(tab.classList.contains('vision')){
            tab.classList.add('active')
            tabContent[1].classList.add('active');
            tabContent[0].classList.remove('active');
            tabContent[2].classList.remove('active');
            tabButtons[0].classList.remove('active')
            tabButtons[2].classList.remove('active')
        }
        else if(tab.classList.contains('goals')){
            tab.classList.add('active')
            tabContent[2].classList.add('active');
            tabContent[0].classList.remove('active');
            tabContent[1].classList.remove('active');
            tabButtons[1].classList.remove('active')
            tabButtons[0].classList.remove('active')
        }      
    })
})