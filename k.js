let star = document.getElementById('star')
let x = document.getElementById('moon')
let a = document.getElementById('montan')
let d = document.getElementById('moontan2')
let r = document.getElementById('river')
let sh = document.getElementById('boat')
let u = document.getElementById('w')
let nou = document.querySelector('.K')
window.onscroll = function () {
    let value = scrollY;
    star.style.left = value + 'px';
    x.style.top = value * 4 + 'px';
    a.style.top = value * 1.9 + 'px';
    d.style.top = value * 1.4 + 'px';
    r.style.top = value + 'px';
    sh.style.top = value + 'px';
    sh.style.left = value * 2.9 + 'px';
    nou.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        nou.style.fontSize = 67 + 'px';
        nou.style.position = 'fixed';
        if (scrollY >= 411) {
            nou.style.display = 'none';
        }
        else {
            nou.style.display = 'block';
        }
        if (scrollY >= 111) {
            document.querySelector('.khaled').style.background = 'linear-gradient(#0c8ee0,#3820bc)'
        } else {
            document.querySelector('.khaled').style.background = 'linear-gradient(#200016,#10001f)'


        }
    }
}