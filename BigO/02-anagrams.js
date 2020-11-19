function firstAnagram(str1, str2) {

  let letters1 = str1.split('')
  let letters2 = str2.split('')
  letters1.forEach((letter) => {
    let letterIndex = letters2.indexOf(letter)
    if (letterIndex === -1) return false
    letters2.splice(letterIndex, 1)
  });
  return (letters2.length === 0)
}

// console.log(firstAnagram('elvis', 'livers'))


function secondAnagram(str1, str2) {
  let letters1 = str1.split('').sort().join('')
  let letters2 = str2.split('').sort().join('')

  if (letters1 === letters2) return true

  // return true;

  //   console.log(letters1, letters2)
  // return true;
  return false
}

// console.log(secondAnagram('elvis', 'livers'))


function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  let letters1 = str1.split('');
  let letters2 = str2.split('');

  letters1.forEach((letter) => {
    if (letter in obj1) {
      obj1[letter]++
    }
    else {
      obj1[letter] = 1;
    }
  })

  letters2.forEach((letter) => {
    if (letter in obj2) {
      obj2[letter]++
    }
    else {
      obj2[letter] = 1;
    }
  })
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  for (key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

// console.log(thirdAnagram('elvis', 'lives'))


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
