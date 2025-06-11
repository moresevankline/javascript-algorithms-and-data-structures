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

function palindrome(text) {
  const textDisplay = palindromeChecker(text)
    ? `${text} is a palindrome`
    : `${text} is not a palindrome`;
  return textDisplay;
}

const testData = [
  { input: "A", expected: "A is a palindrome" },
  { input: "eye", expected: "eye is a palindrome" },
  { input: "_eye", expected: "_eye is a palindrome" },
  { input: "race car", expected: "race car is a palindrome" },
  {
    input: "not a palindrome",
    expected: "not a palindrome is not a palindrome",
  },
  {
    input: "A man, a plan, a canal. Panama",
    expected: "A man, a plan, a canal. Panama is a palindrome",
  },
  {
    input: "never odd or even",
    expected: "never odd or even is a palindrome",
  },
  { input: "nope", expected: "nope is not a palindrome" },
  { input: "almostomla", expected: "almostomla is not a palindrome" },
  {
    input: "My age is 0, 0 si ega ym.",
    expected: "My age is 0, 0 si ega ym. is a palindrome",
  },
  {
    input: "1 eye for of 1 eye.",
    expected: "1 eye for of 1 eye. is not a palindrome",
  },
  {
    input: "0_0 (: /-\\ :) 0-0",
    expected: "0_0 (: /-\\ :) 0-0 is a palindrome",
  },
  {
    input: "five|\\_/|four",
    expected: "five|\\_/|four is not a palindrome",
  },
];

function testPalindrome() {
  try {
    for (data of testData) {
      const test = palindrome(data.input);
      if (data.expected === test) {
        console.log("Test passed");
      } else {
        console.log("Test failed");
      }
    }
  } catch (error) {
    console.log(`Test error: ${error}`);
  }
}

testPalindrome();
