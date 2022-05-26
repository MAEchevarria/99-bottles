// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// 96 bottles of beer on the wall, 96 bottles of beer.
// Take one down and pass it around, 95 bottles of beer on the wall.
// 95 bottles of beer on the wall, 95 bottles of beer.
// Take one down and pass it around, 94 bottles of beer on the wall.
// 94 bottles of beer on the wall, 94 bottles of beer.
// Take one down and pass it around, 93 bottles of beer on the wall.
// 93 bottles of beer on the wall, 93 bottles of beer.
// Take one down and pass it around, 92 bottles of beer on the wall.
// 92 bottles of beer on the wall, 92 bottles of beer.
// Take one down and pass it around, 91 bottles of beer on the wall.
// 91 bottles of beer on the wall, 91 bottles of beer.
// Take one down and pass it around, 90 bottles of beer on the wall.
// ...
// ...
// ...
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Take note of how the 'bottles' turns to 'bottle' at the right time
// You can certainly use while, for, forEach, and various other built in methods
// Challenge Yourself
// Make your code able to take in and account for any bottle amount
// Refactor your code so it doesn't use any loops or iteration whatsoever

function bottleSong(num = 99) {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    } else if (i === 1) {
      console.log(`${i} bottle of beer on the wall. ${i} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`);
    } else if (i > 1) {
      console.log(`${i} bottles of beer on the wall. ${i} bottles of beer.
Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
  }
}

console.log(bottleSong());
