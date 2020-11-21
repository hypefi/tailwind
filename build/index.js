function navToggle() {
    var btn = document.getElementById('button1');
    var nav = document.getElementById('flyout1');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}
