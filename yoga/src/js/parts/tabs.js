function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTab(1);

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (e.target == tab[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;