

        const array1 = ['a', 'b', 'c', 'x'];
        const array2 = ['z', 'y', 'a'];

        const containsCommonItem2 = (arr1, arr2) => {
        let map = {};
        for (let i = 0; i < arr1.length; i++) {
          if (!map[i]) {
            let item = arr1[i];
            map[item] = true

          }
        }

      console.log(map);
 
    };
    // O(a + b)

        containsCommonItem2(array1, array2);


//         const array3 = ['a', 'b', 'c', 'x'];
//         const array4 = ['z', 'y', 'a'];

//         const containsCommonItem3 = (arr1, arr2) => {
//       //  loop through first array and create object where properties === items in the array
//       let map = {};
//       // for (let i = 0; i < arr1.length; i++) {
//      arr1.forEach(i => {
//        if(!map[i]) {
//          let item = arr1[i];
//          map[item] = true
//        }
  
// });
//       console.log(map);
//       // loop through second array and check if item in second array exists on created object.
//     };
//     // O(a + b)

//         containsCommonItem3(array3, array4);


