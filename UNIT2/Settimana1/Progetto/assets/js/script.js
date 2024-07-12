const nav = document.getElementsByTagName('nav')[0];
const list = document.querySelector('nav ul li:nth-of-type(5)');

console.log(list)

window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 500) {
        nav.style.backgroundColor = 'white';
        nav.style.border = 'none';
        list.classList.remove('black')
        list.classList.add('green');
    } else {
        nav.style.background = '#FFC017';
        nav.style.borderBottom = '1px solid #191919';
        list.classList.remove('green');
        list.classList.add('black');
    }
});


