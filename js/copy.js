function copyNumber(id){
    const copyNumber = document.getElementById(id).innerText;
    // copy to clipboard
    navigator.clipboard.writeText(copyNumber).then(() => {
        alert('নম্বর কপি হয়েছে : ' + copyNumber);
    })
}

function copyNumberCount() {
    const parent = document.getElementById('count-copy');
    let copyCount = parseInt(parent.innerText);
    copyCount++;
    parent.innerText = copyCount
}

// for card 1
document.getElementById('btn-copy-1').addEventListener('click', () => {
    copyNumber('card-1-number'); 
    copyNumberCount();
})

// for card 2
document.getElementById('btn-copy-2').addEventListener('click', () => {
    copyNumber('card-2-number'); 
    copyNumberCount();
})

// for card 3
document.getElementById('btn-copy-3').addEventListener('click', () => {
    copyNumber('card-3-number'); 
    copyNumberCount();
})

// for card 4
document.getElementById('btn-copy-4').addEventListener('click', () => {
    copyNumber('card-4-number'); 
    copyNumberCount();
})

// for card 5
document.getElementById('btn-copy-5').addEventListener('click', () => {
    copyNumber('card-5-number'); 
    copyNumberCount();
})

// for card 6
document.getElementById('btn-copy-6').addEventListener('click', () => {
    copyNumber('card-6-number'); 
    copyNumberCount();
})

// for card 7
document.getElementById('btn-copy-7').addEventListener('click', () => {
    copyNumber('card-7-number'); 
    copyNumberCount();
})

// for card 8
document.getElementById('btn-copy-8').addEventListener('click', () => {
    copyNumber('card-8-number'); 
    copyNumberCount();
})

// for card 9
document.getElementById('btn-copy-9').addEventListener('click', () => {
    copyNumber('card-9-number'); 
    copyNumberCount();
})