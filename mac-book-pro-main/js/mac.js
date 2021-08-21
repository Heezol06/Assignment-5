// memory related consteant variable 
const memory8Gb = document.getElementById('memory-8-gb');
const memory16Gb = document.getElementById('memory-16-gb');
const memoryCost = document.getElementById('memory-cost');

// storage related consteant variable 
const storage256gb = document.getElementById('storage-256-gb');
const storage512gb = document.getElementById('storage-512-gb');
const storage1tb = document.getElementById('storage-1-tb')
const storageCost = document.getElementById('storage-Cost');

// delivery related consteant variable 
const fridayCharge = document.getElementById('friday-charge');
const saturdayCharge = document.getElementById('saturday-charge');
const deliveryCost = document.getElementById('delivrey-charge');

// total price related consteant variable 
const total = document.getElementById('total-price');

// add promo code  related consteant variable 
const applyButton = document.getElementById('apply-btn');
const applyInput = document.getElementById('apply-input');

// promo code price variable
const promoCodePrice = document.getElementById('promo-code-price');
const previousTotal = parseFloat(total.innerText);

// Memory handle 
memory8Gb.addEventListener('click', function () {
    memoryCost.innerText = '0';
    totalPrice()
})
memory16Gb.addEventListener('click', function () {
    memoryCost.innerText = '180';
    totalPrice()
})

// // storage handle 
storage256gb.addEventListener('click', function () {
        storageCost.innerText = '0';
        totalPrice()
    })
    storage512gb.addEventListener('click', function () {
        storageCost.innerText = "100";
        totalPrice()
    });


    storage1tb.addEventListener('click', function(){
        storageCost.innerText = "180";
        totalPrice()
});

// delivery handle 
fridayCharge.addEventListener('click', function(){
    deliveryCost.innerText = "0";
    totalPrice()
});
saturdayCharge.addEventListener('click', function(){
    deliveryCost.innerText = "20";
    totalPrice()
});

// total price 

function totalPrice(){
    const memoryCharge = parseInt(memoryCost.innerText);
    const strogeCharge = parseInt(storageCost.innerText);
    const deliveryCharge = parseInt(deliveryCost.innerText);
    const grandTotal = 1299 + memoryCharge + strogeCharge + deliveryCharge;
    total.innerText = grandTotal;
    promoCodeValidation();
}


// add promo code function
function promoCodeValidation() {
    const discount = (previousTotal  / 100)*20;
    if (applyInput.value == 'stevekaku' ){
        console.log(discount)
        promoCodePrice.innerText  = previousTotal - discount;
    }
    applyInput.value ="";
}
