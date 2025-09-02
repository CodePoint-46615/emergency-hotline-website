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

// for card - 2
document.getElementById('btn-call-2').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-2-title', 'card-2-number');

    if (successfulCall) {
        const data = {
            title: 'পুলিশ',
            number: '999',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 3
document.getElementById('btn-call-3').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-3-title', 'card-3-number');

    if (successfulCall) {
        const data = {
            title: 'ফায়ার সার্ভিস',
            number: '999',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 4
document.getElementById('btn-call-4').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-4-title', 'card-4-number');

    if (successfulCall) {
        const data = {
            title: 'অ্যাম্বুলেন্স',
            number: '1994-999999',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 5
document.getElementById('btn-call-5').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-5-title', 'card-5-number');

    if (successfulCall) {
        const data = {
            title: 'নারী ও শিশু সহায়তা',
            number: '109',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 6
document.getElementById('btn-call-6').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-6-title', 'card-6-number');

    if (successfulCall) {
        const data = {
            title: 'দুদক',
            number: '106',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 7
document.getElementById('btn-call-7').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-7-title', 'card-7-number');

    if (successfulCall) {
        const data = {
            title: 'বিদ্যুৎ বিভ্রাট',
            number: '16216',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 8
document.getElementById('btn-call-8').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-8-title', 'card-8-number');

    if (successfulCall) {
        const data = {
            title: 'ব্র্যাক',
            number: '16445',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

// for card - 9
document.getElementById('btn-call-9').addEventListener('click', () => {
    const successfulCall = callFunction('count-coin', 'card-9-title', 'card-9-number');

    if (successfulCall) {
        const data = {
            title: 'বাংলাদেশ রেলওয়ে',
            number: '163',
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        callHistoryTracer();
    }

    clearCallHistory();
});

