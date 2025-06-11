const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function palindrome() {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
  } else {
    const textDisplay = palindromeChecker(text)
      ? `${text} is a palindrome`
      : `${text} is not a palindrome`;
    result.innerText = textDisplay;
  }
}

function palindromeChecker(str) {
  const regex = /[\W_]/g;
  let text = String(str);
  let reverseText = "";
  text = text.replace(regex, "");
  text = text.toLowerCase();
  let textLength = text.length - 1;
  while (textLength >= 0) {
    reverseText += text[textLength];
    textLength -= 1;
  }
  return text == reverseText;
}

checkButton.addEventListener("click", palindrome);
