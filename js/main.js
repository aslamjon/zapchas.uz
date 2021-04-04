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
})
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
})

let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let count = document.querySelectorAll('.count');

document.querySelectorAll('.count').forEach((value, index) => {
    plus[index].onclick = function () {
        document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) + 1;

    }
    minus[index].onclick = function () {
        if (document.querySelectorAll('.count')[index].value > 1) {
            document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) - 1;
        }
    }
})

function openSelect(selectId, select_show, optionHide,self) {
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
    }
    
    else {
        if ('1' < select.value){
            select.setAttribute('size', select.length);
            option_hide.style.display = 'block';
        }
        else{
            select.setAttribute('size', select.length - 1);
            option_hide.style.display = 'none';
        }
        
        select.style.marginTop = '8px';
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

function openData(dataId,dataId2,self){
    let d1 = document.getElementsByClassName(dataId)[0];
    let d2 = document.getElementsByClassName(dataId2)[0];
    d1.style.transform = 'translateX(0px)';
    d2.style.transform = 'translateX(0px)';
    self.style.display = 'none';    
}

function clearCart(cart){
    let c = document.querySelectorAll('.s-body');
    c.forEach((value, index) => {
        value.innerHTML = '';
    })
}
function clearAllSum(...sum){
    console.log(sum);
    sum.forEach((value, index) => {
        document.querySelectorAll('.'+value).forEach((v,i)=>{
            console.log(v);
            v.innerHTML = '0';
        })
    })
}

function zoomIn(mainImg,px){
    let img = document.querySelector('.'+mainImg);
    img.style.width = img.clientWidth+px+'px';
    // console.log(img.clientWidth);
}
function changeImg(selfImg, mainImg){
    let main = document.querySelector('.'+mainImg);
    main.setAttribute('src',selfImg.getAttribute('src'))
}
function changeGreyStar(){
    let img1 = document.querySelectorAll('.starGrey1');
    img1.forEach((value,index,array) => {
        value.onclick = function(){
            for (let i = 0; i < array.length;i++){
                array[i].children[0].setAttribute('src','img/star-grey.svg');
            }
            for (let i = 0; i <= index;i++){
                array[i].children[0].setAttribute('src','img/star.png');
            }
        }
    })
}
changeGreyStar();