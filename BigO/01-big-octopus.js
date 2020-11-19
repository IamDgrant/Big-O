const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishies) {
  for (let i = fishies.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (fishies[j - 1].length > fishies[j].length) {
        let temp = fishies[j - 1]
        fishies[j - 1] = fishies[j]
        fishies[j] = temp
      }
    }
  }
  return fishies.pop()
}
// console.log(quadraticBiggestFish(fishies))

function nlognBiggestFish(fishes) {
  return fishes.sort((fish1, fish2) => (fish1.length - fish2.length)).pop()
}
// console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  let biggestFish = fishes[0];
  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i].length > biggestFish.length) {
      biggestFish = fishes[i];
    }
  }
  return biggestFish;
}

// console.log(linearBiggestFish(fishies))

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (direction === tilesArray[i]) {
      return i
    }
  }
}

// console.log(slowDance('left-up', tilesArray))


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction]
}

console.log(fastDance('up', tilesObj))
