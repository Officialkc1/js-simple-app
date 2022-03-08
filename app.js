const productNameInput = document.getElementById('product-name');
// console.log(productNameInput)
const remainingCharsElement = document.getElementById('remaining-chars');
// console.log(remainingCharsElement);

const maxAllowedChars = productNameInput.maxLength;
// console.log(maxAllowedChars);

const spanElement = document.getElementById('remaining-chars');
// console.log(spanElement);
// spanElement.className = 'warning';


function updateRemainingChars(event) {
    const enteredText = event.target.value;
    // console.log(enteredText);
    const enteredTextLength = enteredText.length;
    // console.log(enteredTextLength);

    const remainingChars = maxAllowedChars - enteredTextLength;
    // console.log(remainingChars);
    
    remainingCharsElement.textContent = remainingChars;
    // console.log(remainingCharsElement.textContent);

    // if (enteredTextLength >= 50) {
    //     productNameInput.className = 'warning'
    // } else {
    //     productNameInput.classList.remove('warning')
    // }
    if (remainingChars <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInput.classList.add('warning');
    } else {
        remainingCharsElement.classList.remove('warning');
        productNameInput.classList.remove('warning')

    }
    
}

productNameInput.addEventListener('input', updateRemainingChars);

