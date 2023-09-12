function isPalindrome(word) {
  // Reverse the word
  const reversedWord = word.split('').reverse().join('');

  // Check if the word is the same as the reversed word
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  Problem:
  Make the "isPalindrome" function check the word passed in as an arguement and return true if it is the same backwards and forwards. Return False if it doesn't.

  I will need to somehow iterate through the string, look at each character in two ways, from the beginning to end, and end to beginning, then compare the two and evaluate my value to be returned.


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
