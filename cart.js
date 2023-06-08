let counter = document.querySelector('.cart-item-quantity input');
console.log(typeof counter.value);
let newCounter = parseInt(counter.value);
function incrementQuantity(){
    newCounter++;
    counter.value = newCounter;
}
function decrementQuantity(){
    if(counter.value === '0'){
        return;
    }else{
        newCounter--;
        counter.value = newCounter;
    }
}