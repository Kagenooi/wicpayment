let tab__path,
    tab__btn,
    tab;

function tabs() {
    tab = document.querySelectorAll('.ron-tab');

    for (let i = 0; i < tab.length; i++) {
        tab__path = tab[i].querySelectorAll('.ron-tab__path');
        for (let x = 0; x < tab__path.length; x++) {
            tab__path[x].classList.remove('active');
        }
        tab__path[0].classList.add('active');

        tab__btn = tab[i].querySelectorAll('.ron-tab__btn');
        for (let x = 0; x < tab__btn.length; x++) {
            tab__btn[x].classList.remove('active');
        }
        tab__btn[0].classList.add('active');
    }
}
tabs();

function openTab(tab__index, thisBtn) {
    tab = thisBtn.closest('.ron-tab');

    tab__path = tab.querySelectorAll('.ron-tab__path');
    for (let i = 0; i < tab__path.length; i++) {
        tab__path[i].classList.remove('active');
    }
    tab__path[tab__index].classList.add('active');

    tab__btn = tab.querySelectorAll('.ron-tab__btn');
    for (let i = 0; i < tab__btn.length; i++) {
        tab__btn[i].classList.remove('active');
    }
    tab__btn[tab__index].classList.add('active');
}