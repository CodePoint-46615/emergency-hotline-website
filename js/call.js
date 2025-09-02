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

const callHistory = []; 

function Data(){
    const callHistoryTitle = document.getElementById('call-history-title').innerText; 
    const callHistoryNumber = document.getElementById('call-history-number').innerText;  

    const data = {
        title: callHistoryTitle, 
        number: callHistoryNumber,
        time: new Date().toLocaleTimeString()
    }

    callHistory.push(data); 
}

document.getElementById('btn-call-1').addEventListener('click', () => {
    callFunction('count-coin', 'card-1-title', 'card-1-number');
    Data();

    const callLogSection = document.getElementById('call-log-container');
    callLogSection.innerHTML = ``;

    for (const history of callHistory) {
        const dynamicCallLogSection = document.createElement('div')

        dynamicCallLogSection.innerHTML =
        `
            <div class="flex mt-4 mb-2 justify-between items-center shadow p-2 bg-[#FAFAFA] ">
                <div>
                    <h1>${history.title}</h1>
                    <h1 class="text-[#5C5C5C]">${history.number}</h1>
                </div>
                <p>${history.time}</p>
            </div>
        `
        callLogSection.appendChild(dynamicCallLogSection); 

    }

});