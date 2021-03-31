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

var changeHero = setInterval(changeBg, 3000);


// story_card animation
