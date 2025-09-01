const coinCountField = document.getElementById('count-coin');

const msg = document.getElementById('card-title').innerText; 
const msg2 =document.getElementById('card-1-number').innerText;

document.getElementById('btn-call-1').addEventListener('click', () => {
    let coinCount = parseInt(coinCountField.textContent, 10);
    
    if(coinCount < 20){
        alert('Insufficient Coin.'); 
    }
    else{
        let newCoinCount = coinCount - 20; 
        coinCountField.textContent = newCoinCount;
        alert(msg3 +'Calling '+ msg +' '+ msg2 + '...'); 
    }
});