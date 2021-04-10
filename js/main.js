$('.chegirma').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('#section1Owl').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('#section2Owl').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('#tab-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let count = document.querySelectorAll('.count');

document.querySelectorAll('.count').forEach((value, index) => {
    value.setAttribute('disabled', true);
    value.classList.add('text-black');
    plus[index].onclick = function () {
        document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) + 1;

    }
    minus[index].onclick = function () {
        if (document.querySelectorAll('.count')[index].value > 1) {
            document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) - 1;
        }
    }
})

function openSelect(selectId, select_show, optionHide, self) {
    let select = document.getElementById(selectId);
    let open_select_show = document.getElementById(select_show);
    let option_hide = document.getElementById(optionHide);
    if ((select.length - 1 == select.getAttribute('size')) || (select.length == select.getAttribute('size'))) {
        option_hide.style.display = 'block';
        open_select_show.style.display = 'none';
        select.setAttribute('size', '1');
        select.style.marginTop = '0px';
        select.style.width = '95%';
        select.style.background = '#fff';
        select.style.padding = '0px';
        document.getElementsByClassName('year')[0].style.display = 'block';
        document.getElementsByClassName('brend')[0].style.display = 'block';
        document.getElementsByClassName('model12')[0].style.display = 'block';
        document.getElementsByClassName('dvi')[0].style.display = 'block';
        select.style.left = '5px';
    } else {
        if ('1' < select.value) {
            select.setAttribute('size', select.length);
            option_hide.style.display = 'block';
        } else {
            select.setAttribute('size', select.length - 1);
            option_hide.style.display = 'none';
        }
        if (window.innerWidth <= 401) {
            select.style.marginTop = '31px';
        } else {
            select.style.marginTop = '37px';
        }
        select.style.width = '100%';
        select.style.background = '#CECECE';
        select.style.padding = '10px';
        open_select_show.style.display = 'flex';
        self.style.position = 'relative';
        select.style.position = 'absolute';
        select.style.left = '0';
        if (window.innerWidth < 997) {
            switch (selectId) {
                case 's1':
                    document.getElementsByClassName('brend')[0].style.display = 'none';
                    document.getElementsByClassName('model12')[0].style.display = 'none';
                    document.getElementsByClassName('dvi')[0].style.display = 'none';
                    break;
                case 's2':
                    document.getElementsByClassName('year')[0].style.display = 'none';
                    document.getElementsByClassName('model12')[0].style.display = 'none';
                    document.getElementsByClassName('dvi')[0].style.display = 'none';
                    break;
                case 's3':
                    document.getElementsByClassName('year')[0].style.display = 'none';
                    document.getElementsByClassName('brend')[0].style.display = 'none';
                    document.getElementsByClassName('dvi')[0].style.display = 'none';
                    break;
                case 's4':
                    document.getElementsByClassName('year')[0].style.display = 'none';
                    document.getElementsByClassName('brend')[0].style.display = 'none';
                    document.getElementsByClassName('model12')[0].style.display = 'none';
                    break;

                default:
                    break;
            }
        }

    }
}

function openData(dataId, dataId2, self) {
    let d1 = document.getElementsByClassName(dataId)[0];
    let d2 = document.getElementsByClassName(dataId2)[0];
    d1.style.display = 'flex';
    d2.style.display = 'block';
    setTimeout(function () {
        d1.style.transform = 'translateX(0px)';
        d2.style.transform = 'translateX(0px)';
        self.style.display = 'none';
    }, 300);

}

function clearCart(cart) {
    let c = document.querySelectorAll('.s-body');
    c.forEach((value, index) => {
        value.innerHTML = '';
    })
}

function clearAllSum(...sum) {
    console.log(sum);
    sum.forEach((value, index) => {
        document.querySelectorAll('.' + value).forEach((v, i) => {
            console.log(v);
            v.innerHTML = '0';
        })
    })
}

function zoomIn(mainImg, px) {
    let img = document.querySelector('.' + mainImg);
    img.style.width = img.clientWidth + px + 'px';
    // console.log(img.clientWidth);
}

function zoomModal(mainImg, modalImg) {
    let main = document.querySelector('.' + mainImg);
    let mImg = document.getElementById(modalImg);
    mImg.children[0].setAttribute('src', main.getAttribute('src'))
}

function changeImg(selfImg, mainImg) {
    let main = document.querySelector('.' + mainImg);
    main.style.opacity = 0
    main.style.transition = '0.3s';
    setTimeout(function () { main.style.opacity = 1 }, 500);
    setTimeout(function () { main.setAttribute('src', selfImg.getAttribute('src')); }, 500);
    let anotherImg = document.querySelectorAll('.anotherImg');
    anotherImg.forEach((value, index) => {
        console.log(value.children[0]);
        value.children
        for (let i = 0; value.children.length > i; i++) {
            // value.children[i].style.border = 'none';
            value.children[i].classList.remove('borderImg');
        }

    });
    let col4 = document.querySelectorAll('.col-4');
    col4.forEach((value, index) => {
        console.log(value.children[0]);
        value.children
        for (let i = 0; value.children.length > i; i++) {
            // value.children[i].style.border = 'none';
            value.children[i].classList.remove('borderImg');
        }

    });
    selfImg.style.transition = '0.3s';
    selfImg.classList.toggle('borderImg');
}

function changeGreyStar() {
    let img1 = document.querySelectorAll('.starGrey1');
    img1.forEach((value, index, array) => {
        value.onclick = function () {
            for (let i = 0; i < array.length; i++) {
                array[i].children[0].setAttribute('src', 'img/star-grey.svg');
            }
            for (let i = 0; i <= index; i++) {
                array[i].children[0].setAttribute('src', 'img/star.png');
            }
        }
    })
}
changeGreyStar();
function bor(b1) {
    for (let i = 0; b1.length > i; i++) {
        b1[i].classList.remove("yuq");
        b1[i].classList.add("bor");
    }
}
function yuq(b1) {
    for (let i = 0; b1.length > i; i++) {
        b1[i].classList.remove("bor");
        b1[i].classList.add("yuq");
    }
}
let b1 = document.querySelectorAll('.Owl1');
let b2 = document.querySelectorAll('.Owl2');
let b3 = document.querySelectorAll('.Owl3');
let b4 = document.querySelectorAll('.Owl4');
let b5 = document.querySelectorAll('.Owl5');
let b6 = document.querySelectorAll('.Owl6');
tabNav1();
function tabNav1() {
    yuq(b2);
    yuq(b3);
    yuq(b4);
    yuq(b5);
    yuq(b6);
    bor(b1);
    for (let i = 0; b1.length > i; i++){
        if (i%2 == 0){
            b1[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-prev')[0].click();
            }
        }
        else{
            b1[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-next')[0].click();
            } 
        }
    }
}
function tabNav2() {
    yuq(b1);
    yuq(b3);
    yuq(b4);
    yuq(b5);
    yuq(b6);
    bor(b2);

    for (let i = 0; b2.length > i; i++){
        if (i%2 == 0){
            b2[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-prev')[1].click();
            }
        }
        else{
            b2[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-next')[1].click();
            }
        } 
    }
}
function tabNav3() {
    yuq(b1);
    yuq(b2);
    yuq(b4);
    yuq(b5);
    yuq(b6);
    bor(b3);

    for (let i = 0; b3.length > i; i++){
        if (i%2 == 0){
            b3[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-prev')[2].click();
            }
        }
        else{
            b3[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-next')[2].click();
            }
        }
    }
}
function tabNav4() {
    yuq(b1);
    yuq(b2);
    yuq(b3);
    yuq(b5);
    yuq(b6);
    bor(b4);
    for (let i = 0; b4.length > i; i++){
        if (i%2 == 0){
            b4[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-prev')[3].click();
            }
        }
        else{
            b4[i].children[0].onclick = function(){
                document.querySelectorAll('.owl-next')[3].click();
            } 
        }
    }
}


function href(url) {
    window.location = url;
}
if (window.location.pathname == '/index.html') timeOfDiscount(8);

function timeOfDiscount(setday) {
    let day = document.getElementById('day');
    let hours = document.getElementById('hours');
    let minut = document.getElementById('minut');
    let sec = document.getElementById('sec');
    day.innerHTML = setday;
    console.log(sec.innerHTML);
    if ((sec.innerHTML == 00) && (minut.innerHTML == 00) && (hours.innerHTML == 00)) {
        day.innerHTML--;
        hours.innerHTML = 24;
    }
    if ((sec.innerHTML == 00) && (minut.innerHTML == 00) && (hours.innerHTML == 24)) {
        hours.innerHTML--;
        minut.innerHTML = 60;
    }
    if ((sec.innerHTML == 00) && (minut.innerHTML == 60)) {
        minut.innerHTML--;
        sec.innerHTML = 60;
    }
    let timer = setInterval(function () {
        sec.innerHTML--;
        if (sec.innerHTML == 0) {
            minut.innerHTML--;
            sec.innerHTML = 60;
        }
        if (minut.innerHTML == 0) {
            hours.innerHTML--;
            minut.innerHTML = 60;
        }
        if (hours.innerHTML == 0) {
            day.innerHTML--;
            hours.innerHTML = 24;
        }
        if ((sec.innerHTML == 0) && (minut.innerHTML == 0) && (hours.innerHTML == 0) && (day.innerHTML == 0)) {
            day.style.color = 'red';
            hours.style.color = 'red';
            minut.style.color = 'red';
            sec.style.color = 'red';
            clearInterval(timer);
        }
    }, 1000);
}

function cartOnclick() {
    let cartt = document.querySelectorAll('.cartt');
    cartt.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('carttActive');
            value.children[0].classList.toggle('carttImgForAcrive');
        }
    });
    let iconPlace = document.querySelectorAll('.iconPlace');
    iconPlace.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('carttActive');
            value.children[0].classList.toggle('carttImgForAcrive');
        }
    });
    let iconJoy = document.querySelectorAll('.icon-joy');
    iconJoy.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('carttActive');
            value.children[0].classList.toggle('carttImgForAcrive');
        }
    });
}
cartOnclick();

function likeOnclick() {
    let like = document.querySelectorAll('.heart-ic');
    let like2 = document.querySelectorAll('.icon-heart');
    let like3 = document.querySelectorAll('.icon-like');
    like.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('likeActive');
        }
    })
    like2.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('likeActive');
        }
    })
    like3.forEach((value, index) => {
        value.onclick = function () {
            value.classList.toggle('likeActive');
        }
    })
}
likeOnclick();