let productNameInput = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInput.maxLength;

function updateRemainingChars(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;
}

productNameInput.addEventListener('input', updateRemainingChars);