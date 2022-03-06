const productNameInput = document.getElementById('product-name');
// productNameInput.className = 'warning'
// console.log(productNameInput)
const remainingCharsElement = document.getElementById('remaining-chars');
// console.log(remainingCharsElement)

const maxAllowedChars = productNameInput.maxLength;
// console.log(maxAllowedChars)

const spanElement = document.getElementById('remaining-chars')
console.log(spanElement)
spanElement.className = 'warning'


function updateRemainingChars(event) {
    const enteredText = event.target.value;
    // console.log(enteredText)
    const enteredTextLength = enteredText.length;
    // console.log(enteredTextLength)

    const remainingChars = maxAllowedChars - enteredTextLength;
    // console.log(remainingChars)

    remainingCharsElement.textContent = remainingChars;
    // console.log(remainingCharsElement.textContent)
}

productNameInput.addEventListener('input', updateRemainingChars);