var animationFles = bodymovin.loadAnimation({
    container: document.getElementById('knop1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/ingredienten/data.json'

});

var animationFleshover = bodymovin.loadAnimation({
    container: document.getElementById('knop1h'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/ingredienten/hover/data.json'

});
var animationShake = bodymovin.loadAnimation({
    container: document.getElementById('knop2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/shake/data.json'

});

var animationShakehoover = bodymovin.loadAnimation({
    container: document.getElementById('knop2h'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/shake/hover/data.json'

});

var animationCheers = bodymovin.loadAnimation({
    container: document.getElementById('knop3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/cheers/data.json'

});

var animationCheershoover = bodymovin.loadAnimation({
    container: document.getElementById('knop3h'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/cheers/hover/data.json'

});



var objectFles = bodymovin.loadAnimation({
    container: document.getElementById('flessen'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'objects/flessen/data.json'

});

var objectShake = bodymovin.loadAnimation({
    container: document.getElementById('shaker'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'objects/shaker/data.json'

});

var objectCoctail = bodymovin.loadAnimation({
    container: document.getElementById('coctail'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'objects/coctail/data.json'

});

var FlesTransition = bodymovin.loadAnimation({
    container: document.getElementById('flesTrans'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'transitons/fles/data.json'

});

var ShakerTransition = bodymovin.loadAnimation({
    container: document.getElementById('shakerTrans'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'transitons/shake/data.json'

});

var CoctailTransition = bodymovin.loadAnimation({
    container: document.getElementById('coctailTrans'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'transitons/coctail/data.json'

});
var Background = bodymovin.loadAnimation({
    container: document.getElementById('background'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/data.json'

});

var volumeAchtergrond = document.getElementById("achtergrondgeluid");
vid.volume = 0.2;
