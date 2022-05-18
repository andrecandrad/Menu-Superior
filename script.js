const menu = document.querySelector('#menu-mobile');
const nav = document.querySelector('#navigation');
const items = document.querySelectorAll('ion-icon');
const html = document.querySelector('html');

menu.addEventListener('click', () => {
    nav.classList.toggle('mobileNav');
    items.forEach(item => {
        item.classList.toggle('mobileItem');
    })
})

html.addEventListener('click', (e) => {
    var target = $(e.target);

    if(target[0] === menu){
        return;
    }
    if(nav.classList.contains('mobileNav')){
        nav.classList.toggle('mobileNav');
        items.forEach(item => {
            item.classList.toggle('mobileItem');
        })
    }
})