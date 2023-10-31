var header = Document.get:ElementByide('header');

window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY
    if (scroll>10) {
        header.style.backgroundColor = '#121212'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})