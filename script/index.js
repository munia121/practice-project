const cards = document.querySelectorAll('.card')

let title = 1;
let totalPrice = 0;

for(let i = 0; i< cards.length; i++){
    const card = cards[i];
    card.addEventListener('click',function(){
        const cardTitle = card.querySelector('.card-title').innerText;
        // console.log(cardTitle);

        // card title
        let colorAsNumber = 'blue';
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = title + '. ' + cardTitle;
        p.style.color = colorAsNumber;
        titleContainer.appendChild(p);
        title++;
       
        // total price 
        const totalprice = card.querySelector('.dolar-price').innerText.split(' ')[1];
        const price = parseFloat(totalprice);
        // console.log(totalprice);
        totalPrice=totalPrice + price;
        document.getElementById('totalPrice').innerText = totalPrice;
    })
}

document.getElementById('apply-btn').addEventListener('click', function(){
   const inputField = document.getElementById('input-field').value;
   const inputCode = inputField.split(' ').join('').toUpperCase();
   console.log(inputCode);
   if( totalPrice >= 200){
    if(inputCode === 'SELL200'){
        const discountElement = document.getElementById('discount-amount');
        const discount = totalPrice * 0.2;
        discountElement.innerText = discount.toFixed(2);
        document.getElementById('input-field').value= ''

        const totalCost = document.getElementById('total')
        const total =  totalPrice - discount;
        totalCost.innerText = total;

    }
    else{
        alert('Invalid coupon code')
        document.getElementById('input-field').value= ''
    }
    
   }
   else{
    alert('please fill up the target')
    document.getElementById('input-field').value= ''
   }
   
})

document.getElementById('title-container').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    e.target.parentNode.removeChild(e.target);
})
