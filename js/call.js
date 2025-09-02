function callFunction(id, msgTitle, msgNumber) {

    const coinCountField = document.getElementById(id);
    const msg = document.getElementById(msgTitle).innerText;
    const msg2 = document.getElementById(msgNumber).innerText;

    let coinCount = parseInt(coinCountField.textContent, 10);

    if (coinCount < 20) {
        alert('Insufficient Coin.');
        return false;
    }
    else {
        let newCoinCount = coinCount - 20;
        coinCountField.textContent = newCoinCount;
        alert('Calling ' + msg + ' ' + msg2 + '...');
        return true;
    }
    //return coinCountField.textContent;
}

const callHistory = [];

function callHistoryTracer() {
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
}

function clearCallHistory() {
    document.getElementById('btn-clear-history').addEventListener('click', () => {
        const cardContainer = document.getElementById('call-log-container');
        cardContainer.innerHTML = ``;
        callHistory.length = 0;
    })
}

// for card - 1
document.getElementById('btn-call-1').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-1-title', 'card-1-number');

    if (successfulCall) {
        const data = {
            title: 'জাতীয় জরুরি সেবা',
            number: '999',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

