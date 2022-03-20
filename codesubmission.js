const array = [22, 4, 6]

const findSum = array.reduce(
  (prevValue, nextValue) => prevValue + nextValue, 0);
  
console.log(findSum);






const arr = ['b', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd', 'd', 'b']

function mostFrequent(items) {
  let mostFrequentNumber = items[0]
  const counted = items.reduce((acc, item) => { 
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item]++
    }

    if(acc[item] > acc[mostFrequentNumber]) {
      mostFrequentNumber = item
    }

    return acc;
  }, {});

  return mostFrequentNumber
}
function leastFrequent(items) {
  let leastFrequentNumber = items[0]
  const counted = items.reduce((acc, item) => { 
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item]++
    }

    if(acc[item] < acc[leastFrequentNumber]) {
      leastFrequentNumber = item
    }

    return acc;
  }, {});

  return leastFrequentNumber
}
console.log('most: '  + mostFrequent(arr) + ' least: ' + leastFrequent(arr))






const isPalindrome = function(str) {
  const lowerCase = str.toLowerCase();
  const reverseWord = lowerCase.split('').reverse().join(''); 
  if (reverseWord === lowerCase) {
    return true;
} 
  if (reverseWord !== lowerCase) {
    return false;
}
};
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('shifts'));





const largestPair = function(array) {
  let x = Number.NEGATIVE_INFINITY;
      for (let i = 1; i < array.length; i++) {
        x = Math.max(array[i] * array[i - 1], x);
    }

    return x;
};
console.log(largestPair([-23,4,1,-3,8,5000,-12]));




const removeParenth = function(str) {
  str = str.replace(/[()]/g,'');
  return str;
};
console.log(removeParenth('i(do(not)like(tocode'));



const scoreScrabble = function(str) {
  str = str.toLowerCase();
  let letterPoints = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
    totalPoints = 0
    
  for (let i = 0; i < str.length; i++){
    totalPoints += letterPoints[str[i]]
  };
  return totalPoints
    
  };
console.log(scoreScrabble('quiz'));
