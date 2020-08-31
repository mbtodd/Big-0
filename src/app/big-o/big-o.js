//Find 1st, Find Nth..

const array = [
  {
  tweet: 'hi',
  date: 2012
  }, 
  {
  tweet: 'my',
  date: 2014
  }, 
  {
  tweet: 'teddy',
  date: 2018
  }
]; //Find date: O(n^2)  nested loops


array[0]; //0(1)
array[array.lenth-1] //0(1)

'helwoshejehekaliudsua'.length // O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   return hiArray;
// }
// arrayOfHiNTimes(6)
