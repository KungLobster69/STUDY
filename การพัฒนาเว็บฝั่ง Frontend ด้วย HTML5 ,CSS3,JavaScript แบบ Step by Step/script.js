const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const rateText=document.getElementById('rate');
const swap=document.getElementById('btn');

currency_one.addEventListener('change',calculateMoney);

function calculateMoney(){
    const_onr = currency_one.Value;
    const_two = currency_two.vakue;
    let url='http://api.exchangerate-api.com/v4/latest/${one}';
    fetch(url);
}

calculateMoney();