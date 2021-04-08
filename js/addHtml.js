function addSavat() {
    let addSavatH = `
    <a href="savatcha.html" class="text-decoration-none">
    <div class="cart-order">
    <img src="img/product-24-1-300x300 1.png" alt="Error">
    <div class="content">
        <div class="c-title">STP Generator Platinum</div>
        <div class="text">
            Many philosophical debates that began in ancient times are still debated today. In one general sense.
        </div>
        <div class="c-footer">
            <div class="sum">379 000 so’m</div>
            <form action="#">
                <button type="button" class="minus">-</button>
                <input type="tel" value="1" class="count">
                <button type="button" class="plus">+</button>
            </form>
        </div>
    </div>
</div>
    </a>
    `
    document.getElementById("addSavatPlace").innerHTML += addSavatH;
}

function tozalash() {
    document.getElementById('AllData').innerHTML = 'Tozanalndi !';

}

function chizish() {
    window.location = '../selectedProducts.html'
}