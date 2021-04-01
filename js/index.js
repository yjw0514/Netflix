function changeBg() {

var imgNumPrev = 0;
var imgNum = Math.floor(Math.random() * 10);

// if (imgNum == imgNumPrev) {
//     imgNum = Math.floor(Math.random() * 10);
//     if (imgNum == imgNumPrev) {
//         imgNum = Math.floor(Math.random() * 10);
//     }
// }

while ( imgNum == imgNumPrev ) {
    imgNum = Math.floor(Math.random() * 10);
    break;
}

document.getElementById('hero_bg').style = "background-image: url(../img/poster_" + imgNum + ".jpg); "

document.getElementById('hero_bg').classList.remove('effect_fade_in');
void document.getElementById('hero_bg').offsetWidth; //undefined로 바꿔버림
document.getElementById('hero_bg').classList.add('effect_fade_in');

imgNumPrev = imgNum;

}

var changeHero = setInterval(changeBg, 5000);


// faq
let faqQ = document.querySelectorAll('.faq_q');
let faqsvg = document.querySelectorAll('.faq_q_svg');

let faqopenstate = [];

for (let i=0; i<faqQ.length; i++) {
    faqopenstate[i] = false;
}

function faqOpen(target) {

    for (let i=0; i<faqQ.length; i++ ) {
        if (i != target) {
            faqQ[i].style = "height: 80px;";
            faqsvg[i].style = "transform: rotate(45deg);";
            faqopenstate[i] = false;
        }
    }

    if (faqopenstate[target]) {
        faqQ[target].style = "height: 80px;";
        faqsvg[target].style = "transform: rotate(45deg);";
        faqopenstate[target] = false;
    }

    else {
        faqQ[target].style = "max-height: 500px;";
        faqsvg[target].style = "transform: rotate(90deg);";
        faqopenstate[target] = true;
    }
}

