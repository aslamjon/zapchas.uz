function addSavat() {
    let addSavatH = `
    <div class="cart-order cursor-pointer">
    <img src="img/product-24-1-300x300 1.png" alt="Error" onclick="location.href='savatcha.html'">
    <div class="content">
        <div class="c-title" onclick="location.href='savatcha.html'">STP Generator Platinum</div>
        <div class="text" onclick="location.href='savatcha.html'">
            Many philosophical debates that began in ancient times are still debated today. In one general sense.
        </div>
        <div class="c-footer">
            <div class="sum" onclick="location.href='savatcha.html'">379 000 so’m</div>
            <form action="#">
                <button type="button" class="minus">-</button>
                <input type="tel" disabled value="1" class="count text-black">
                <button type="button" class="plus">+</button>
            </form>
        </div>
    </div>
</div>
    `
    document.getElementById("addSavatPlace").innerHTML += addSavatH;
    
    document.querySelector('.total-sum').innerHTML = `<span id="total-sum">1 137 000</span> so’m`;
    
    let minus = document.querySelectorAll('.minus');
    let plus = document.querySelectorAll('.plus');
    let count = document.querySelectorAll('.count');
    let total_sum = document.querySelector('#total-sum');


    function countPlusMinus(){
        document.querySelectorAll('.count').forEach((value, index) => {
            value.setAttribute('disabled', true);
            value.classList.add('text-black');
            plus[index].onclick = function() {
                document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) + 1;
                
                total_sum.innerHTML = total_sum.innerHTML.replace(' ','');
                total_sum.innerHTML = total_sum.innerHTML.replace(' ','');
                let res = String((Number(total_sum.innerHTML) + 379000));
                let result = numberWithCommas(res);
                for(i = 0; result.length > i; i+=3){
                    if(result.includes(',')){
                        result = result.replace(',',' ');
                    }
                }
                total_sum.innerHTML = result;
            }
            minus[index].onclick = function() {
                if (document.querySelectorAll('.count')[index].value > 1) {
                    document.querySelectorAll('.count')[index].value = Number(document.querySelectorAll('.count')[index].value) - 1;
                    if (total_sum.innerHTML.includes(' ')) {
                        total_sum.innerHTML = total_sum.innerHTML.replace(' ','');
                        total_sum.innerHTML = total_sum.innerHTML.replace(' ','');
                    }
                    
                    if (Number(total_sum.innerHTML) >= 379000) {
                        let res = String((Number(total_sum.innerHTML) - 379000));
                        let result = numberWithCommas(res);
                        for(i = 0; result.length > i; i+=3){
                            if(result.includes(',')){
                                result = result.replace(',',' ');
                            }
                        }
                        total_sum.innerHTML = result;
                    }
                }
            }
        })
    }
    countPlusMinus()
}

function tozalash() {
    document.getElementById('AllData').innerHTML = 'Tozanalndi !';

}

function chizish() {
    window.location = '../selectedProducts.html'
}