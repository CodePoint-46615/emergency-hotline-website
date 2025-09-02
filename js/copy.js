// for button 1
document.getElementById('btn-copy-1').addEventListener('click', ()=>{
    const copyNumber = document.getElementById('card-1-number').innerText; 
    
    // copy to clipboard
    navigator.clipboard.writeText(copyNumber).then(()=>{
        alert('copied ' + copyNumber); 
    })
})