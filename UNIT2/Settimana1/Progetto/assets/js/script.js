const nav = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 500) {
        nav.style.backgroundColor = 'white';
        nav.style.border = 'none';
    } else {
        nav.style.background = '#FFC017';
        nav.style.borderBottom = '1px solid #191919';
    }
});


