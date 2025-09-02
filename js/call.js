function callFunction(id, msgTitle, msgNumber) {

    const coinCountField = document.getElementById(id);
    const msg = document.getElementById(msgTitle).innerText;
    const msg2 = document.getElementById(msgNumber).innerText;

    let coinCount = parseInt(coinCountField.textContent, 10);

    if (coinCount < 20) {
        alert('Insufficient Coin.');
    }
    else {
        let newCoinCount = coinCount - 20;
        coinCountField.textContent = newCoinCount;
        alert('Calling ' + msg + ' ' + msg2 + '...');
    }
    return coinCountField.textContent;
}


document.getElementById('btn-call-1').addEventListener('click', () => {
    callFunction('count-coin', 'card-title', 'card-1-number');
});