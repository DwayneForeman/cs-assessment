//1) Sum Zero

// Time Complexity is O(n^2) - This is because it is a nested loop. The inner loop iterates (n) then the out loop iterates (another n)
// Since the function only uses a constant number of variables (i, x and arrOfNums) it will be be O(1) Space complexity

function isSumZero(arrOfNums) {
  for (let i = 0; i < arrOfNums.length; i++) {
    for (let x = 0; x < arrOfNums.length; x++) {
      if (arrOfNums[i] + arrOfNums[x] === 0) {
        console.log("true");
        return true;
      }
    }
  }
  return false;
}

const myArr = [0, 0, 1, 1, 4, 5, 7, 9];

console.log(isSumZero(myArr));

//2) Unique Characters
// Time Complexity is O(n^2) - This is because it is a nested loop. The inner loop iterates (n) then the out loop iterates (another n)
// Since the function only uses a constant number of variables (i, x and word) it will be O(1) Space complexity

function uniqueChar(word) {
  const charArr = word.split("");

  for (let i = 0; i < charArr; i++) {
    for (let x = 0; x < charArr; x++) {
      if (charArr[i] != charArr[x]) {
        return true;
      }
    }
  }
  return false;
}

console.log(uniqueChar("loong"));

//3) Pangram Sentence
//Time Complexity is O(1) - This is because it is a constant function, meaning the time will be the same as it is comparing what the user inputs to the constant alphabet letters.
// Since the function only uses a constant number of variables it will be O(1) Space complexity

function hasAlphaLetters(paragraph) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const paragraphLowerCase = paragraph.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    const letterOfAlphabet = alphabet[i];

    if (!paragraphLowerCase.includes(letterOfAlphabet)) {
      return false;
    }
  }

  return true;
}

console.log(hasAlphaLetters("The quick brown fox jumps over the lazy dog!"));
console.log(hasAlphaLetters("haa haa"));

//4) Longest Word
// Time Complexity is O(n) - This is because it is the time will be based on the n (arrayOfWords) input into the function
// Since the function only uses a constant number of variables it will be O(1) Space complexity

function findLongestWord(arrayOfWords) {
  let longestLength = 0;
  let longestString = "";

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestLength) {
      longestLength = arrayOfWords[i].length;
      longestString = arrayOfWords[i];
    }
  }
  return longestString;
}

console.log(findLongestWord(["hi", "hello"]));
